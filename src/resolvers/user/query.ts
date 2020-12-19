import { User } from 'prisma-client';
import { UsersArguments, UserArguments } from '@typings';

export const Query = {
  users: (_parent: Unrestricted, args: UsersArguments, { prisma }: Context, info: any): Promise<User[]> => {
    return prisma.users(args);
  },
  user: (_parent: Unrestricted, args: UserArguments, { prisma }: Context): Promise<Nullable<User>> => {
    return prisma.user(args.where);
  }
}
