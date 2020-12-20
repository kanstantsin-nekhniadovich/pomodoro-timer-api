// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `type AggregateProject {
  count: Int!
}

type AggregateTask {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar Long

type Mutation {
  createProject(data: ProjectCreateInput!): Project!
  updateProject(data: ProjectUpdateInput!, where: ProjectWhereUniqueInput!): Project
  updateManyProjects(data: ProjectUpdateManyMutationInput!, where: ProjectWhereInput): BatchPayload!
  upsertProject(where: ProjectWhereUniqueInput!, create: ProjectCreateInput!, update: ProjectUpdateInput!): Project!
  deleteProject(where: ProjectWhereUniqueInput!): Project
  deleteManyProjects(where: ProjectWhereInput): BatchPayload!
  createTask(data: TaskCreateInput!): Task!
  updateTask(data: TaskUpdateInput!, where: TaskWhereUniqueInput!): Task
  updateManyTasks(data: TaskUpdateManyMutationInput!, where: TaskWhereInput): BatchPayload!
  upsertTask(where: TaskWhereUniqueInput!, create: TaskCreateInput!, update: TaskUpdateInput!): Task!
  deleteTask(where: TaskWhereUniqueInput!): Task
  deleteManyTasks(where: TaskWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Project {
  id: ID!
  title: String!
  tasks(where: TaskWhereInput, orderBy: TaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Task!]
  status: Status!
  note: String
  owner: User!
}

type ProjectConnection {
  pageInfo: PageInfo!
  edges: [ProjectEdge]!
  aggregate: AggregateProject!
}

input ProjectCreateInput {
  id: ID
  title: String!
  tasks: TaskCreateManyWithoutProjectInput
  status: Status!
  note: String
  owner: UserCreateOneWithoutProjectsInput!
}

input ProjectCreateManyWithoutOwnerInput {
  create: [ProjectCreateWithoutOwnerInput!]
  connect: [ProjectWhereUniqueInput!]
}

input ProjectCreateOneWithoutTasksInput {
  create: ProjectCreateWithoutTasksInput
  connect: ProjectWhereUniqueInput
}

input ProjectCreateWithoutOwnerInput {
  id: ID
  title: String!
  tasks: TaskCreateManyWithoutProjectInput
  status: Status!
  note: String
}

input ProjectCreateWithoutTasksInput {
  id: ID
  title: String!
  status: Status!
  note: String
  owner: UserCreateOneWithoutProjectsInput!
}

type ProjectEdge {
  node: Project!
  cursor: String!
}

enum ProjectOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  status_ASC
  status_DESC
  note_ASC
  note_DESC
}

type ProjectPreviousValues {
  id: ID!
  title: String!
  status: Status!
  note: String
}

input ProjectScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  status: Status
  status_not: Status
  status_in: [Status!]
  status_not_in: [Status!]
  note: String
  note_not: String
  note_in: [String!]
  note_not_in: [String!]
  note_lt: String
  note_lte: String
  note_gt: String
  note_gte: String
  note_contains: String
  note_not_contains: String
  note_starts_with: String
  note_not_starts_with: String
  note_ends_with: String
  note_not_ends_with: String
  AND: [ProjectScalarWhereInput!]
  OR: [ProjectScalarWhereInput!]
  NOT: [ProjectScalarWhereInput!]
}

type ProjectSubscriptionPayload {
  mutation: MutationType!
  node: Project
  updatedFields: [String!]
  previousValues: ProjectPreviousValues
}

input ProjectSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProjectWhereInput
  AND: [ProjectSubscriptionWhereInput!]
  OR: [ProjectSubscriptionWhereInput!]
  NOT: [ProjectSubscriptionWhereInput!]
}

input ProjectUpdateInput {
  title: String
  tasks: TaskUpdateManyWithoutProjectInput
  status: Status
  note: String
  owner: UserUpdateOneRequiredWithoutProjectsInput
}

input ProjectUpdateManyDataInput {
  title: String
  status: Status
  note: String
}

input ProjectUpdateManyMutationInput {
  title: String
  status: Status
  note: String
}

input ProjectUpdateManyWithoutOwnerInput {
  create: [ProjectCreateWithoutOwnerInput!]
  delete: [ProjectWhereUniqueInput!]
  connect: [ProjectWhereUniqueInput!]
  set: [ProjectWhereUniqueInput!]
  disconnect: [ProjectWhereUniqueInput!]
  update: [ProjectUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [ProjectUpsertWithWhereUniqueWithoutOwnerInput!]
  deleteMany: [ProjectScalarWhereInput!]
  updateMany: [ProjectUpdateManyWithWhereNestedInput!]
}

input ProjectUpdateManyWithWhereNestedInput {
  where: ProjectScalarWhereInput!
  data: ProjectUpdateManyDataInput!
}

input ProjectUpdateOneRequiredWithoutTasksInput {
  create: ProjectCreateWithoutTasksInput
  update: ProjectUpdateWithoutTasksDataInput
  upsert: ProjectUpsertWithoutTasksInput
  connect: ProjectWhereUniqueInput
}

input ProjectUpdateWithoutOwnerDataInput {
  title: String
  tasks: TaskUpdateManyWithoutProjectInput
  status: Status
  note: String
}

input ProjectUpdateWithoutTasksDataInput {
  title: String
  status: Status
  note: String
  owner: UserUpdateOneRequiredWithoutProjectsInput
}

input ProjectUpdateWithWhereUniqueWithoutOwnerInput {
  where: ProjectWhereUniqueInput!
  data: ProjectUpdateWithoutOwnerDataInput!
}

input ProjectUpsertWithoutTasksInput {
  update: ProjectUpdateWithoutTasksDataInput!
  create: ProjectCreateWithoutTasksInput!
}

input ProjectUpsertWithWhereUniqueWithoutOwnerInput {
  where: ProjectWhereUniqueInput!
  update: ProjectUpdateWithoutOwnerDataInput!
  create: ProjectCreateWithoutOwnerInput!
}

input ProjectWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  tasks_every: TaskWhereInput
  tasks_some: TaskWhereInput
  tasks_none: TaskWhereInput
  status: Status
  status_not: Status
  status_in: [Status!]
  status_not_in: [Status!]
  note: String
  note_not: String
  note_in: [String!]
  note_not_in: [String!]
  note_lt: String
  note_lte: String
  note_gt: String
  note_gte: String
  note_contains: String
  note_not_contains: String
  note_starts_with: String
  note_not_starts_with: String
  note_ends_with: String
  note_not_ends_with: String
  owner: UserWhereInput
  AND: [ProjectWhereInput!]
  OR: [ProjectWhereInput!]
  NOT: [ProjectWhereInput!]
}

input ProjectWhereUniqueInput {
  id: ID
  title: String
}

type Query {
  project(where: ProjectWhereUniqueInput!): Project
  projects(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Project]!
  projectsConnection(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProjectConnection!
  task(where: TaskWhereUniqueInput!): Task
  tasks(where: TaskWhereInput, orderBy: TaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Task]!
  tasksConnection(where: TaskWhereInput, orderBy: TaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TaskConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

enum Status {
  TODO
  INPROGRESS
  COMPLETED
}

type Subscription {
  project(where: ProjectSubscriptionWhereInput): ProjectSubscriptionPayload
  task(where: TaskSubscriptionWhereInput): TaskSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
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

type TaskConnection {
  pageInfo: PageInfo!
  edges: [TaskEdge]!
  aggregate: AggregateTask!
}

input TaskCreateInput {
  id: ID
  title: String!
  cyclesCount: Int!
  workTime: Int!
  breakTime: Int!
  status: Status!
  remainingTime: Int!
  currentCycle: Int!
  project: ProjectCreateOneWithoutTasksInput!
}

input TaskCreateManyWithoutProjectInput {
  create: [TaskCreateWithoutProjectInput!]
  connect: [TaskWhereUniqueInput!]
}

input TaskCreateWithoutProjectInput {
  id: ID
  title: String!
  cyclesCount: Int!
  workTime: Int!
  breakTime: Int!
  status: Status!
  remainingTime: Int!
  currentCycle: Int!
}

type TaskEdge {
  node: Task!
  cursor: String!
}

enum TaskOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  cyclesCount_ASC
  cyclesCount_DESC
  workTime_ASC
  workTime_DESC
  breakTime_ASC
  breakTime_DESC
  status_ASC
  status_DESC
  remainingTime_ASC
  remainingTime_DESC
  currentCycle_ASC
  currentCycle_DESC
}

type TaskPreviousValues {
  id: ID!
  title: String!
  cyclesCount: Int!
  workTime: Int!
  breakTime: Int!
  status: Status!
  remainingTime: Int!
  currentCycle: Int!
}

input TaskScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  cyclesCount: Int
  cyclesCount_not: Int
  cyclesCount_in: [Int!]
  cyclesCount_not_in: [Int!]
  cyclesCount_lt: Int
  cyclesCount_lte: Int
  cyclesCount_gt: Int
  cyclesCount_gte: Int
  workTime: Int
  workTime_not: Int
  workTime_in: [Int!]
  workTime_not_in: [Int!]
  workTime_lt: Int
  workTime_lte: Int
  workTime_gt: Int
  workTime_gte: Int
  breakTime: Int
  breakTime_not: Int
  breakTime_in: [Int!]
  breakTime_not_in: [Int!]
  breakTime_lt: Int
  breakTime_lte: Int
  breakTime_gt: Int
  breakTime_gte: Int
  status: Status
  status_not: Status
  status_in: [Status!]
  status_not_in: [Status!]
  remainingTime: Int
  remainingTime_not: Int
  remainingTime_in: [Int!]
  remainingTime_not_in: [Int!]
  remainingTime_lt: Int
  remainingTime_lte: Int
  remainingTime_gt: Int
  remainingTime_gte: Int
  currentCycle: Int
  currentCycle_not: Int
  currentCycle_in: [Int!]
  currentCycle_not_in: [Int!]
  currentCycle_lt: Int
  currentCycle_lte: Int
  currentCycle_gt: Int
  currentCycle_gte: Int
  AND: [TaskScalarWhereInput!]
  OR: [TaskScalarWhereInput!]
  NOT: [TaskScalarWhereInput!]
}

type TaskSubscriptionPayload {
  mutation: MutationType!
  node: Task
  updatedFields: [String!]
  previousValues: TaskPreviousValues
}

input TaskSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TaskWhereInput
  AND: [TaskSubscriptionWhereInput!]
  OR: [TaskSubscriptionWhereInput!]
  NOT: [TaskSubscriptionWhereInput!]
}

input TaskUpdateInput {
  title: String
  cyclesCount: Int
  workTime: Int
  breakTime: Int
  status: Status
  remainingTime: Int
  currentCycle: Int
  project: ProjectUpdateOneRequiredWithoutTasksInput
}

input TaskUpdateManyDataInput {
  title: String
  cyclesCount: Int
  workTime: Int
  breakTime: Int
  status: Status
  remainingTime: Int
  currentCycle: Int
}

input TaskUpdateManyMutationInput {
  title: String
  cyclesCount: Int
  workTime: Int
  breakTime: Int
  status: Status
  remainingTime: Int
  currentCycle: Int
}

input TaskUpdateManyWithoutProjectInput {
  create: [TaskCreateWithoutProjectInput!]
  delete: [TaskWhereUniqueInput!]
  connect: [TaskWhereUniqueInput!]
  set: [TaskWhereUniqueInput!]
  disconnect: [TaskWhereUniqueInput!]
  update: [TaskUpdateWithWhereUniqueWithoutProjectInput!]
  upsert: [TaskUpsertWithWhereUniqueWithoutProjectInput!]
  deleteMany: [TaskScalarWhereInput!]
  updateMany: [TaskUpdateManyWithWhereNestedInput!]
}

input TaskUpdateManyWithWhereNestedInput {
  where: TaskScalarWhereInput!
  data: TaskUpdateManyDataInput!
}

input TaskUpdateWithoutProjectDataInput {
  title: String
  cyclesCount: Int
  workTime: Int
  breakTime: Int
  status: Status
  remainingTime: Int
  currentCycle: Int
}

input TaskUpdateWithWhereUniqueWithoutProjectInput {
  where: TaskWhereUniqueInput!
  data: TaskUpdateWithoutProjectDataInput!
}

input TaskUpsertWithWhereUniqueWithoutProjectInput {
  where: TaskWhereUniqueInput!
  update: TaskUpdateWithoutProjectDataInput!
  create: TaskCreateWithoutProjectInput!
}

input TaskWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  cyclesCount: Int
  cyclesCount_not: Int
  cyclesCount_in: [Int!]
  cyclesCount_not_in: [Int!]
  cyclesCount_lt: Int
  cyclesCount_lte: Int
  cyclesCount_gt: Int
  cyclesCount_gte: Int
  workTime: Int
  workTime_not: Int
  workTime_in: [Int!]
  workTime_not_in: [Int!]
  workTime_lt: Int
  workTime_lte: Int
  workTime_gt: Int
  workTime_gte: Int
  breakTime: Int
  breakTime_not: Int
  breakTime_in: [Int!]
  breakTime_not_in: [Int!]
  breakTime_lt: Int
  breakTime_lte: Int
  breakTime_gt: Int
  breakTime_gte: Int
  status: Status
  status_not: Status
  status_in: [Status!]
  status_not_in: [Status!]
  remainingTime: Int
  remainingTime_not: Int
  remainingTime_in: [Int!]
  remainingTime_not_in: [Int!]
  remainingTime_lt: Int
  remainingTime_lte: Int
  remainingTime_gt: Int
  remainingTime_gte: Int
  currentCycle: Int
  currentCycle_not: Int
  currentCycle_in: [Int!]
  currentCycle_not_in: [Int!]
  currentCycle_lt: Int
  currentCycle_lte: Int
  currentCycle_gt: Int
  currentCycle_gte: Int
  project: ProjectWhereInput
  AND: [TaskWhereInput!]
  OR: [TaskWhereInput!]
  NOT: [TaskWhereInput!]
}

input TaskWhereUniqueInput {
  id: ID
}

type User {
  id: ID!
  name: String!
  email: String!
  password: String!
  avatarUrl: String
  projects(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Project!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  name: String!
  email: String!
  password: String!
  avatarUrl: String
  projects: ProjectCreateManyWithoutOwnerInput
}

input UserCreateOneWithoutProjectsInput {
  create: UserCreateWithoutProjectsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutProjectsInput {
  id: ID
  name: String!
  email: String!
  password: String!
  avatarUrl: String
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  avatarUrl_ASC
  avatarUrl_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  password: String!
  avatarUrl: String
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  email: String
  password: String
  avatarUrl: String
  projects: ProjectUpdateManyWithoutOwnerInput
}

input UserUpdateManyMutationInput {
  name: String
  email: String
  password: String
  avatarUrl: String
}

input UserUpdateOneRequiredWithoutProjectsInput {
  create: UserCreateWithoutProjectsInput
  update: UserUpdateWithoutProjectsDataInput
  upsert: UserUpsertWithoutProjectsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutProjectsDataInput {
  name: String
  email: String
  password: String
  avatarUrl: String
}

input UserUpsertWithoutProjectsInput {
  update: UserUpdateWithoutProjectsDataInput!
  create: UserCreateWithoutProjectsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  avatarUrl: String
  avatarUrl_not: String
  avatarUrl_in: [String!]
  avatarUrl_not_in: [String!]
  avatarUrl_lt: String
  avatarUrl_lte: String
  avatarUrl_gt: String
  avatarUrl_gte: String
  avatarUrl_contains: String
  avatarUrl_not_contains: String
  avatarUrl_starts_with: String
  avatarUrl_not_starts_with: String
  avatarUrl_ends_with: String
  avatarUrl_not_ends_with: String
  projects_every: ProjectWhereInput
  projects_some: ProjectWhereInput
  projects_none: ProjectWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`;
