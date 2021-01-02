import { User, Auth } from '@typings';
import { hashPassword } from '../../utils/hashPassword';
import { generateToken } from '../../utils/generateToken';
import { isDefined } from '../../utils/isDefined';
import { getUserIdFromAuthorizationHeader } from '../../utils/getUserIdFromAuthorizationHeader';

export const Mutation = {
  signUp: async (_parent: unknown, args: Auth.SignUp, { prisma, passportCtx }: Context): Promise<Auth.Payload> => {
    const { email, password } = args.data;
    const userExists = await prisma.$exists.user({ email });

    if (userExists) {
      throw new Error('User with this email already exists');
    }

    const hashedPassword = await hashPassword(password);
    const user = await prisma.createUser({ ...args.data, password: hashedPassword });
    await passportCtx.login(user);

    return {
      user,
      token: await generateToken(user.id),
    };
  },
  updateUser: async (_parent: unknown, args: User.Mutation.UpdateUser, { prisma, request }: Context): Promise<Nullable<User>> => {
    const { data } = args;
    const userExists = await prisma.$exists.user({ email: data.email });

    if (userExists) {
      throw new Error('User with this email already exists');
    }

    if (typeof data.password === 'string') {
      data.password = await hashPassword(data.password);
    }

    const id = getUserIdFromAuthorizationHeader(request);

    return prisma.updateUser({ data, where: { id } });
  },
  deleteUser: (_parent: unknown, _args: unknown, { prisma, request }: Context): Promise<Nullable<User>> => {
    const id = getUserIdFromAuthorizationHeader(request);
    return prisma.deleteUser({ id });
  },
  login: async (_parent: unknown, args: Auth.Login, { passportCtx }: Context): Promise<Auth.Payload> => {
    const { email, password } = args;

    const { user } = await passportCtx.authenticate('graphql-local', { email, password });

    if (!isDefined(user)) {
      throw new Error('Authentication failed');
    }

    await passportCtx.login(user);
    return {
      user,
      token: await generateToken(user.id),
    };
  },
  logout: async (_parent: unknown, args: unknown, { passportCtx }: Context): Promise<void> => {
    passportCtx.logout();
  },
};
