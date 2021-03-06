import { gql, ApolloServer } from 'apollo-server-micro';
import DbConnection from '@/middleware/DbConnection';
import UserModel from '@/models/UserModel';

DbConnection();

const typeDefs = gql`
  type Query {
    hello: String!
    User(id: String): User
    Users: [User]
  }

  type User {
    _id: String
    email: String
    fullName: String
    phone: String
    password: String
    state: String
    city: String
    landmark: String
    country: String
    address1: String
    address2: String
    isDeleted: Boolean
    isEmailVerified: Boolean
    createdAt: String
    updatedAt: String
  }
`;

const resolvers = {
  Query: {
    hello: () => {
      return 'Hello!';
    },
    User: (_p, { id }, _c) => {
      return UserModel.findById({ _id: id });
    },
    Users: () => {
      return UserModel.find();
    },
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = apolloServer.createHandler({ path: '/api/graphql' });

export default handler;
