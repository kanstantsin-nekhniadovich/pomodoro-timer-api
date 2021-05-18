import { User } from '@prisma/client';

export namespace Auth {
  export type Payload = {
    user: User;
    token: string;
    firebaseToken: string;
  };

  export type Login = {
    email: string;
    password: string;
  };
}

export namespace UserResolvers {
  export type CreateUser = {
    data: {
      email: string;
      password: string;
    },
  };

  export type CreateFacebookUser = {
    data: {
      email: string;
      name: string;
      avatarUrl: string;
    },
  };

  export type UpdateUser = {
    data: {
      name?: string;
      email?: string;
      password?: string;
      avatarUrl?: string;
    },
  };
}
