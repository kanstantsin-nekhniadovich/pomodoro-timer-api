import { Request } from 'express';
import { PrismaClient, Status } from '@prisma/client';

declare global {
  export type Unrestricted = any; // tslint:disable-line: no-any

  export type Nullable<T> = T | null;
  export type Maybe<T> = T | undefined | null;
  export type ParamsType<T> = T extends (args: infer K) => Unrestricted ? K : never;
  export type Id = string;

  export type Context = {
    prisma: PrismaClient;
    request: Request;
  };

  export type Status = 'TODO' | 'INPROGRESS' | 'COMPLETED';
  export type SortOrder = 'asc' | 'desc';

  export type UniqueIdPayload = {
    id: Id;
  };

  type NODE_ENV = 'development' | 'production';

  namespace NodeJS {
    interface ProcessEnv {
      PRISMA_ENDPOINT: string;
      PRISMA_SECRET: string;
      JWT_SECRET: string;
      PORT: number;
      GRAPHQL_PATH: string;
      FIREBASE_PROJECT_ID: string;
      FIREBASE_PRIVATE_KEY: string;
      FIREBASE_CLIENT_EMAIL: string;
      NODE_ENV: NODE_ENV;
    }
  }
}
