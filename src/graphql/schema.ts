import { gql } from 'apollo-server-core';
import { resolvers } from './userResolvers';

export const typeDefs = gql`
    type Query {
        hello: String!
        User(id: String): User
        Users: [User]
    }

    input UserInput {
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

    type Mutation {
        createUser(userInput: UserInput): User!
        updateUser(id: ID!, userInput: UserInput): User
        deleteUser(id: ID): String!
    }
`;

export const schema = { typeDefs, resolvers };
