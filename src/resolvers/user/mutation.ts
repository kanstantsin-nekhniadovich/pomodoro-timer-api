import { UserInputError, AuthenticationError } from 'apollo-server-express';
import { UserResolvers, Auth } from '@typings';
import { User } from '@prisma/client';
import { auth } from 'firebase-admin';
import bcrypt from 'bcryptjs';

import { hashPassword } from '../../utils/hashPassword';
import { generateToken } from '../../utils/generateToken';
import { isDefined } from '../../utils/isDefined';
import { isValidPassword, PASSWORD_MAX_LENGTH } from '../../utils/isValidPassword';
import { getUserIdFromAuthorizationHeader } from '../../utils/getUserIdFromAuthorizationHeader';

export const Mutation = {
  createUser: async (_parent: unknown, args: UserResolvers.CreateUser, { prisma }: Context): Promise<Auth.Payload> => {
    const { email, password } = args.data;
    /* tslint:disable-next-line:await-promise */
    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (isDefined(existingUser) && !existingUser.isFacebookUser) {
      throw new UserInputError('User with this email is already exists');
    }

    if (!isValidPassword(password)) {
      throw new UserInputError(`Password must be at least ${PASSWORD_MAX_LENGTH} characters length`);
    }

    const hashedPassword = await hashPassword(password);

    if (isDefined(existingUser) && existingUser.isFacebookUser) {
      /* tslint:disable-next-line:await-promise */
      const user = await prisma.user.update({ data: { password: hashedPassword }, where: { id: existingUser.id } });

      return {
        user,
        token: await generateToken(user.id),
        firebaseToken: await auth().createCustomToken(user.id),
      };
    }

    const name = email.split('@')[0].toLowerCase();
    /* tslint:disable-next-line:await-promise */
    const user = await prisma.user.create({ data: { email, name, password: hashedPassword, isFacebookUser: false } });

    return {
      user,
      token: await generateToken(user.id),
      firebaseToken: await auth().createCustomToken(user.id),
    };
  },
  createFacebookUser: async (_parent: unknown, args: UserResolvers.CreateFacebookUser, { prisma }: Context): Promise<Auth.Payload> => {
    const { email, avatarUrl, name } = args.data;
    /* tslint:disable-next-line:await-promise */
    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (isDefined(existingUser)) {
      return {
        user: existingUser,
        token: await generateToken(existingUser.id),
        firebaseToken: await auth().createCustomToken(existingUser.id),
      };
    }

    /* tslint:disable-next-line:await-promise */
    const user = await prisma.user.create({ data: { email, name, avatarUrl, isFacebookUser: true } });

    return {
      user,
      token: await generateToken(user.id),
      firebaseToken: await auth().createCustomToken(user.id),
    };
  },
  updateUser: async (_parent: unknown, args: UserResolvers.UpdateUser, { prisma, request }: Context): Promise<Nullable<User>> => {
    const { data } = args;

    if (typeof data.email === 'string') {
      /* tslint:disable-next-line:await-promise */
      const userExists = await prisma.user.findUnique({ where: { email: data.email } });

      if (userExists) {
        throw new UserInputError('User with this email is already exists');
      }
    }

    if (typeof data.password === 'string') {
      if (isValidPassword(data.password)) {
        data.password = await hashPassword(data.password);
      } else {
        throw new UserInputError(`Password must be at least ${PASSWORD_MAX_LENGTH} characters length`);
      }
    }

    const id = getUserIdFromAuthorizationHeader(request);

    return prisma.user.update({ data, where: { id } });
  },
  deleteUser: (_parent: unknown, _args: unknown, { prisma, request }: Context): Promise<Nullable<User>> => {
    const id = getUserIdFromAuthorizationHeader(request);
    return prisma.user.delete({ where: { id } });
  },
  login: async (_parent: unknown, args: Auth.Login, { prisma }: Context): Promise<Auth.Payload> => {
    const { email, password } = args;

    /* tslint:disable-next-line:await-promise */
    const user = await prisma.user.findUnique({ where: { email } });

    if (!isDefined(user) || !isDefined(user.password)) {
      throw new AuthenticationError('Authentication failed');
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      throw new AuthenticationError('Authentication failed');
    }

    return {
      user,
      token: await generateToken(user.id),
      firebaseToken: await auth().createCustomToken(user.id),
    };
  },
  facebookLogin: async (_parent: unknown, args: { email: string }, { prisma }: Context): Promise<Auth.Payload> => {
    const { email } = args;
    /* tslint:disable-next-line:await-promise */
    const user = await prisma.user.findUnique({ where: { email } });

    if (!isDefined(user)) {
      throw new AuthenticationError('Authentication failed');
    }

    return {
      user,
      token: await generateToken(user.id),
      firebaseToken: await auth().createCustomToken(user.id),
    };
  },
};
