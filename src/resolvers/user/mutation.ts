import { User, Auth } from '@typings';
import bcrypt from 'bcryptjs';
import { hashPassword } from '../../utils/hashPassword';
import { generateToken } from '../../utils/generateToken';
import { isDefined } from '../../utils/isDefined';
import { getUserIdFromAuthorizationHeader } from '../../utils/getUserIdFromAuthorizationHeader';
import { auth } from 'firebase-admin';

export const Mutation = {
  createUser: async (_parent: unknown, args: User.Mutation.CreateUser, { prisma }: Context): Promise<Auth.Payload> => {
    const { email, password } = args.data;
    const existingUser = await prisma.user({ email });

    if (isDefined(existingUser) && !existingUser.isFacebookUser) {
      throw new Error('User with this email already exists');
    }

    const hashedPassword = await hashPassword(password);

    if (isDefined(existingUser) && existingUser.isFacebookUser) {
      const user = await prisma.updateUser({ data: { password: hashedPassword }, where: { id: existingUser.id } });

      return {
        user,
        token: await generateToken(user.id),
        firebaseToken: await auth().createCustomToken(user.id),
      };
    }

    const name = email.split('@')[0].toLowerCase();
    const user = await prisma.createUser({ email, name, password: hashedPassword, isFacebookUser: false, });

    return {
      user,
      token: await generateToken(user.id),
      firebaseToken: await auth().createCustomToken(user.id),
    };
  },
  createFacebookUser: async (_parent: unknown, args: User.Mutation.CreateFacebookUser, { prisma }: Context): Promise<Auth.Payload> => {
    const { email, avatarUrl, name } = args.data;
    const existingUser = await prisma.user({ email });

    if (isDefined(existingUser)) {
      return {
        user: existingUser,
        token: await generateToken(existingUser.id),
        firebaseToken: await auth().createCustomToken(existingUser.id),
      };
    }

    const user = await prisma.createUser({ email, name, avatarUrl, isFacebookUser: true });

    return {
      user,
      token: await generateToken(user.id),
      firebaseToken: await auth().createCustomToken(user.id),
    };
  },
  updateUser: async (_parent: unknown, args: User.Mutation.UpdateUser, { prisma, request }: Context): Promise<Nullable<User>> => {
    const { data } = args;

    if (typeof data.email === 'string') {
      const userExists = await prisma.$exists.user({ email: data.email });

      if (userExists) {
        throw new Error('User with this email already exists');
      }
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
  login: async (_parent: unknown, args: Auth.Login, { prisma }: Context): Promise<Auth.Payload> => {
    const { email, password } = args;

    const user = await prisma.user({ email });

    if (!isDefined(user) || !isDefined(user.password)) {
      throw new Error('Authentication failed');
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      throw new Error('Authentication failed');
    }

    return {
      user,
      token: await generateToken(user.id),
      firebaseToken: await auth().createCustomToken(user.id),
    };
  },
  facebookLogin: async (_parent: unknown, args: { email: string }, { prisma }: Context): Promise<Auth.Payload> => {
    const { email } = args;
    const user = await prisma.user({ email });

    if (!isDefined(user)) {
      throw new Error('Authentication failed');
    }

    return {
      user,
      token: await generateToken(user.id),
      firebaseToken: await auth().createCustomToken(user.id),
    };
  },
};
