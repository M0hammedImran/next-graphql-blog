import bcrypt from 'bcryptjs'
import { join } from 'path'
import { makeSchema, mutationType, objectType, queryType } from 'nexus'
import { nexusPrisma } from 'nexus-plugin-prisma'

const User = objectType({
    name: 'User',
    definition(t) {
        t.model.id()
        t.model.firstName()
        t.model.lastName()
        t.model.email()
        t.model.password()
    },
})

const Query = queryType({
    definition(t) {
        t.crud.user()
        t.crud.users({ pagination: true, filtering: true })
    },
})

// TODO: Create the Crud Functions and login and register routes

const Mutation = mutationType({
    definition(t) {
        t.crud.createOneUser({
            resolve: async (_root, args, ctx) => {
                const hash = await bcrypt.hash(args.data.password, 10)

                return ctx.prisma.user.create({
                    data: {
                        ...args.data,
                        password: hash,
                    },
                })
            },
        })

        t.crud.updateOneUser()
    },
})

export const schema = makeSchema({
    types: { Query, User, Mutation },
    // types,
    shouldGenerateArtifacts: process.env.NODE_ENV === 'development',
    plugins: [
        nexusPrisma({
            experimentalCRUD: true,
            outputs: {
                typegen: join(
                    process.cwd(),
                    'src',
                    'generated',
                    'typegen-nexus-plugin-prisma.ts',
                ),
            },
        }),
    ],
    outputs: {
        schema: join(process.cwd(), 'src', 'generated', 'schema.graphql'),
        typegen: join(process.cwd(), 'src', 'generated', 'nexus.type.ts'),
    },
    sourceTypes: {
        modules: [{ module: '@prisma/client', alias: 'PrismaClient' }],
    },
    contextType: {
        module: join(process.cwd(), 'src/graphql/context.ts'),
        export: 'Context',
    },
})
