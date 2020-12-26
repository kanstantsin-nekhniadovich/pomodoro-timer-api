import { Request } from 'express';
import { Prisma, Status } from 'prisma-client';
export * from './user';
export * from './project';
export * from './task';

declare global {
  export type Unrestricted = any; // tslint:disable-line: no-any

  export type Nullable<T> = T | null;
  export type Maybe<T> = T | undefined | null;
  export type ParamsType<T> = T extends (args: infer K) => Unrestricted ? K : never;

  export type Context = {
    prisma: Prisma;
    request: Request;
  };

  export type Status = Status;

  export type UniqueIdPayload = {
    id: string;
  };

  namespace NodeJS {
    interface ProcessEnv {
      PRISMA_ENDPOINT: string;
      PRISMA_SECRET: string;
      JWT_SECRET: string;
      PORT: number;
      GRAPHQL_PATH: string;
    }
  }
}
