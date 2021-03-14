import { join } from 'path'
import { mutationType, makeSchema, objectType, queryType } from 'nexus'
import { nexusPrisma } from 'nexus-plugin-prisma'
import bcrypt from 'bcryptjs'

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

// TODO: Resume 👇🏽
const Mutation = mutationType({
    definition(t) {
        t.crud.createOneUser({
            resolve: async (_root, args, ctx) => {
                const hash = await bcrypt.hash(args.data.password, 10)

                const res = await ctx.prisma.user.create({
                    data: {
                        ...args.data,
                        password: hash,
                    },
                })

                return res
            },
        })

        t.crud.updateOneUser()
    },
})

export const schema = makeSchema({
    types: { Query, User, Mutation },
    plugins: [
        nexusPrisma({
            experimentalCRUD: true,
        }),
    ],
    shouldGenerateArtifacts: process.env.NODE_ENV === 'development',
    outputs: {
        schema: join(process.cwd(), 'src/generated/schema.gen.graphql'),
        typegen: join(process.cwd(), 'src/generated/nexusTypes.gen.ts'),
    },
    contextType: {
        module: join(process.cwd(), 'src/graphql', 'context.ts'),
        export: 'Context',
    },
    sourceTypes: {
        modules: [
            {
                module: '@prisma/client',
                alias: 'prisma',
            },
        ],
    },
})
