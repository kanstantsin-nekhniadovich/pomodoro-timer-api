import { Prisma, UserWhereUniqueInput, UserCreateInput, UserUpdateInput } from 'prisma-client';

export namespace UserQuery {
  export type User = {
    where: UserWhereUniqueInput;
  };
}

export namespace UsersMutation {
  export type CreateUser = {
    data: UserCreateInput;
  };

  export type UpdateUser = ParamsType<Prisma['updateUser']>;

  export type DeleteUser = {
    where: UserWhereUniqueInput;
  };
}
