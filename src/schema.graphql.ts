import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query {
    user(id: ID): User!
    task(id: ID!): Task
    tasks(query: String, skip: Int, after: String, before: String, first: Int, last: Int): [Task]!
    project(id: ID!): Project
    projects(query: String, skip: Int, after: String, before: String, first: Int, last: Int): [Project]!
  }

  type Mutation {
    createUser(data: CreateUserInput!): User!
    updateUser(data: UpdateUserInput!, where: UniqueIdInput!): User!
    deleteUser: User!
    createTask(data: CreateTaskInput!): Task!
    updateTask(data: UpdateTaskInput!, where: UniqueIdInput!): Task!
    deleteTask(id: ID!): Task!
    createProject(data: CreateProjectInput!): Project!
    updateProject(data: UpdateProjectInput!, where: UniqueIdInput!): Project!
    deleteProject(id: ID!): Project!
  }

  input CreateUserInput {
    name: String!
    email: String!
    password: String!
    avatarUrl: String
  }

  input UpdateUserInput {
    name: String
    email: String
    password: String
    avatarUrl: String
  }

  input UniqueIdInput {
    id: ID!
  }

  input CreateTaskInput {
    title: String!
    cyclesCount: Int!
    workTime: Int!
    breakTime: Int!
    status: Status!
    remainingTime: Int!
    currentCycle: Int!
    project: ConnectTaskToProject!
  }

  input UpdateTaskInput {
    title: String
    cyclesCount: Int
    workTime: Int
    breakTime: Int
    status: Status
    remainingTime: Int
    currentCycle: Int
  }

  input ConnectTaskToProject {
    connect: UniqueIdInput
  }

  input CreateProjectInput {
    title: String!
    status: Status!
    note: String!
    owner: ConnectOwnerToProject!
  }

  input ConnectOwnerToProject {
    connect: UniqueIdInput
  }

  input UpdateProjectInput {
    title: String
    status: Status
    note: String
  }

  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
    avatarUrl: String
    projects: [Project!]!
  }

  type Task {
    id: ID!
    title: String!
    cyclesCount: Int!
    workTime: Int!
    breakTime: Int!
    status: Status!
    remainingTime: Int!
    currentCycle: Int!
    project: Project!
  }

  type Project {
    id: ID!
    title: String!
    tasks: [Task!]!
    status: Status!
    note: String
    owner: User!
  }

  enum Status {
    TODO
    INPROGRESS
    COMPLETED
  }
`;
