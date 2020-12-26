import { User } from '@typings';

export const Query = {
  user: (_parent: unknown, _args: unknown, { prisma }: Context): Promise<Nullable<User>> => {
    return prisma.user({}); // TODO implement jwt token logic
  },
};
