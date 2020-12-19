import { Prisma, UserWhereUniqueInput, UserCreateInput, UserUpdateInput } from 'prisma-client';

export type UsersArguments = ParamsType<Prisma['users']>;

export type UserArguments = {
  where: UserWhereUniqueInput;
};

export type CreateUserArguments = {
  data: UserCreateInput;
};

export type UpdateUserArguments = ParamsType<Prisma['updateUser']>;
