import { Prisma } from 'prisma-client'
export * from './user';

declare global {
  export type Unrestricted = any;

  export type Nullable<T> = T | null;
  export type Maybe<T> = T | undefined | null;
  export type ParamsType<T> = T extends (args: infer K) => any ? K : never;

  export type Context = {
    prisma: Prisma;
    request: any;
  }
}
