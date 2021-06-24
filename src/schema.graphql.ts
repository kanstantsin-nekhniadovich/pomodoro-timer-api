import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  scalar DateTime

  type Query {
    user(id: ID): User!
    task(id: ID!): Task
    tasks(query: String, skip: Int, take: Int, orderBy: TaskOrderByInput, projectId: ID!): [Task]!
    project(id: ID!): Project
    projects(query: String, skip: Int, take: Int, orderBy: ProjectOrderByInput): ProjectsResponse!
  }

  type Mutation {
    createUser(data: CreateUserInput!): AuthPayload!
    createFacebookUser(data: CreateFacebookUserInput!): AuthPayload!
    updateUser(data: UpdateUserInput!): User!
    deleteUser: User!
    login(email: String!, password: String!): AuthPayload!
    facebookLogin(email: String!):AuthPayload!
    createTask(data: CreateTaskInput!): Task!
    updateTask(data: UpdateTaskInput!, where: UniqueIdInput!): Task!
    deleteTask(id: ID!): Task!
    createProject(data: CreateProjectInput!): CreateProjectResponse!
    updateProject(data: UpdateProjectInput!, where: UniqueIdInput!): Project!
    deleteProject(id: ID!): DeleteProjectResponse!
  }

  input CreateUserInput {
    email: String!
    password: String!
  }

  input CreateFacebookUserInput {
    email: String!
    name: String!
    avatarUrl: String
  }

  input UpdateUserInput {
    name: String
    email: String
    password: String
    avatarUrl: String
  }

  type AuthPayload {
    user: CreateUserResponse!
    token: String!
    firebaseToken: String!
  }

  input UniqueIdInput {
    id: ID!
  }

  input CreateTaskInput {
    title: String!
    cyclesCount: Int!
    workTime: Int!
    breakTime: Int!
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
    password: String
    avatarUrl: String
    projects: [Project!]!
    isFacebookUser: Boolean!
  }

  type CreateUserResponse {
    id: ID!
    name: String!
    email: String!
    password: String
    avatarUrl: String
    isFacebookUser: Boolean!
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
    projectId: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Project {
    id: ID!
    title: String!
    tasks: [Task!]!
    status: Status!
    note: String
    ownerId: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type CreateProjectResponse {
    id: ID!
    title: String!
    status: Status!
    note: String
    ownerId: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type ProjectsResponse {
    projects: [Project]!
    totalCount: Int!
  }

  type DeleteProjectResponse {
    project: Project!
    totalCount: Int!
  }

  input ProjectOrderByInput {
    id: SortOrder
    title: SortOrder
    status: SortOrder
    note: SortOrder
    ownerId: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
  }

  input TaskOrderByInput {
    id: SortOrder
    title: SortOrder
    cyclesCount: SortOrder
    workTime: SortOrder
    breakTime: SortOrder
    status: SortOrder
    remainingTime: SortOrder
    currentCycle: SortOrder
    projectId: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
  }

  enum SortOrder {
    asc
    desc
  }

  enum Status {
    TODO
    INPROGRESS
    COMPLETED
  }
`;
