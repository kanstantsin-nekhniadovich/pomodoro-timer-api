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
    request: Unrestricted;
  };

  export type Status = Status;

  export type UniqueIdPayload = {
    id: string;
  };
}
