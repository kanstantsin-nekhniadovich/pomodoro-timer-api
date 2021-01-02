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

  export type SignUp = {
    data: {
      name: string;
      email: string;
      password: string;
      avatarUrl?: string;
    };
  };
}

export namespace User {
  export namespace Mutation {
    export type UpdateUser = {
      data: {
        name?: string;
        email?: string;
        password?: string;
        avatarUrl?: string;
      };
    };
  }
}
