import { User } from 'prisma-client';

export type User = User;

export namespace Auth {
  export type Payload = {
    user: User;
    token: string;
  };

  export type Login = {
    email: string;
    password: string;
  };
}

export namespace User {
  export namespace Mutation {

    type Payload = {
      name?: string;
      email?: string;
      password?: string;
      avatarUrl?: string;
    };

    export type CreateUser = {
      data: Required<Payload> & { avatarUrl?: string };
    };

    export type UpdateUser = {
      data: Payload;
    };
  }
}
