import { User } from 'prisma-client';
import { UsersMutation } from '@typings';
import { hashPassword } from '../../utils/hashPassword';

export const Mutation = {
  createUser: async (_parent: unknown, args: UsersMutation.CreateUser, { prisma }: Context): Promise<Nullable<User>> => {
    const { email, password } = args.data;
    const userExists = await prisma.$exists.user({ email });

    if (userExists) {
      throw new Error('User with this email already exists');
    }

    const hashedPassword = await hashPassword(password);

    return prisma.createUser({ ...args.data, password: hashedPassword });
  },
  updateUser: async (_parent: unknown, args: UsersMutation.UpdateUser, { prisma }: Context): Promise<Nullable<User>> => {
    const { data, where } = args;
    const userExists = await prisma.$exists.user({ email: data.email });

    if (userExists) {
      throw new Error('User with this email already exists');
    }

    if (typeof data.password === 'string') {
      data.password = await hashPassword(data.password);
    }

    return prisma.updateUser({ data, where });
  },
  deleteUser: (_parent: unknown, args: UsersMutation.DeleteUser, { prisma }: Context): Promise<Nullable<User>> => {
    return prisma.deleteUser(args.where);
  },
};
