import * as Typegen from 'nexus-plugin-prisma/typegen'
import * as Prisma from '@prisma/client';

// Pagination type
type Pagination = {
    first?: boolean
    last?: boolean
    before?: boolean
    after?: boolean
}

// Prisma custom scalar names
type CustomScalars = 'No custom scalars are used in your Prisma Schema.'

// Prisma model type definitions
interface PrismaModels {
  User: Prisma.User
  Post: Prisma.Post
}

// Prisma input types metadata
interface NexusPrismaInputs {
  Query: {
    users: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'firstName' | 'lastName' | 'email' | 'password' | 'phone' | 'state' | 'city' | 'landmark' | 'country' | 'address1' | 'address2' | 'isDeleted' | 'isEmailVerified' | 'Post' | 'bio'
      ordering: 'id' | 'firstName' | 'lastName' | 'email' | 'password' | 'phone' | 'state' | 'city' | 'landmark' | 'country' | 'address1' | 'address2' | 'isDeleted' | 'isEmailVerified' | 'bio'
    }
    posts: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'title' | 'sectionOne' | 'sectionTwo' | 'sectionThree' | 'authorId' | 'author'
      ordering: 'id' | 'title' | 'sectionOne' | 'sectionTwo' | 'sectionThree' | 'authorId' | 'author'
    }
  },
  User: {
    Post: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'title' | 'sectionOne' | 'sectionTwo' | 'sectionThree' | 'authorId' | 'author'
      ordering: 'id' | 'title' | 'sectionOne' | 'sectionTwo' | 'sectionThree' | 'authorId' | 'author'
    }
  }
  Post: {

  }
}

// Prisma output types metadata
interface NexusPrismaOutputs {
  Query: {
    user: 'User'
    users: 'User'
    post: 'Post'
    posts: 'Post'
  },
  Mutation: {
    createOneUser: 'User'
    updateOneUser: 'User'
    updateManyUser: 'AffectedRowsOutput'
    deleteOneUser: 'User'
    deleteManyUser: 'AffectedRowsOutput'
    upsertOneUser: 'User'
    createOnePost: 'Post'
    updateOnePost: 'Post'
    updateManyPost: 'AffectedRowsOutput'
    deleteOnePost: 'Post'
    deleteManyPost: 'AffectedRowsOutput'
    upsertOnePost: 'Post'
  },
  User: {
    id: 'String'
    firstName: 'String'
    lastName: 'String'
    email: 'String'
    password: 'String'
    phone: 'String'
    state: 'String'
    city: 'String'
    landmark: 'String'
    country: 'String'
    address1: 'String'
    address2: 'String'
    isDeleted: 'Boolean'
    isEmailVerified: 'Boolean'
    Post: 'Post'
    bio: 'String'
  }
  Post: {
    id: 'String'
    title: 'String'
    sectionOne: 'String'
    sectionTwo: 'String'
    sectionThree: 'String'
    authorId: 'String'
    author: 'User'
  }
}

// Helper to gather all methods relative to a model
interface NexusPrismaMethods {
  User: Typegen.NexusPrismaFields<'User'>
  Post: Typegen.NexusPrismaFields<'Post'>
  Query: Typegen.NexusPrismaFields<'Query'>
  Mutation: Typegen.NexusPrismaFields<'Mutation'>
}

interface NexusPrismaGenTypes {
  inputs: NexusPrismaInputs
  outputs: NexusPrismaOutputs
  methods: NexusPrismaMethods
  models: PrismaModels
  pagination: Pagination
  scalars: CustomScalars
}

declare global {
  interface NexusPrismaGen extends NexusPrismaGenTypes {}

  type NexusPrisma<
    TypeName extends string,
    ModelOrCrud extends 'model' | 'crud'
  > = Typegen.GetNexusPrisma<TypeName, ModelOrCrud>;
}
  