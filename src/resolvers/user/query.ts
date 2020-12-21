import { User } from 'prisma-client';
import { UserQuery } from '@typings';

export const Query = {
  user: (_parent: unknown, args: UserQuery.User, { prisma }: Context): Promise<Nullable<User>> => {
    return prisma.user(args.where);
  },
};
