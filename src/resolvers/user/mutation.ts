import { User } from '@typings';
import { hashPassword } from '../../utils/hashPassword';

export const Mutation = {
  createUser: async (_parent: unknown, args: User.Mutation.CreateUser, { prisma }: Context): Promise<Nullable<User>> => {
    const { email, password } = args.data;
    const userExists = await prisma.$exists.user({ email });

    if (userExists) {
      throw new Error('User with this email already exists');
    }

    const hashedPassword = await hashPassword(password);

    return prisma.createUser({ ...args.data, password: hashedPassword });
  },
  updateUser: async (_parent: unknown, args: User.Mutation.UpdateUser, { prisma }: Context): Promise<Nullable<User>> => {
    const { data } = args;
    const userExists = await prisma.$exists.user({ email: data.email });

    const where = {}; // TODO implement jwt logic

    if (userExists) {
      throw new Error('User with this email already exists');
    }

    if (typeof data.password === 'string') {
      data.password = await hashPassword(data.password);
    }

    return prisma.updateUser({ data, where });
  },
  deleteUser: (_parent: unknown, args: unknown, { prisma }: Context): Promise<Nullable<User>> => {
    return prisma.deleteUser({}); // TODO implement jwt logic
  },
};
