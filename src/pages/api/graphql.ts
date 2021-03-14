import { ApolloServer } from 'apollo-server-micro'
import { schema } from '@/graphql/schema'
import { createContext } from '@/graphql/context'

const apolloServer = new ApolloServer({
    schema,
    context: createContext,
    tracing: process.env.NODE_ENV === 'development',
})

export const config = {
    api: {
        bodyParser: false,
    },
}

const handler = apolloServer.createHandler({ path: '/api/graphql' })

export default handler
