import { ApolloServer } from 'apollo-server-micro';
import { DbConnection } from '@/middleware/DbConnection';
import { schema } from '@/graphql/schema';

DbConnection();

const apolloServer = new ApolloServer(schema);

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = apolloServer.createHandler({ path: '/api/graphql' });

export default handler;
