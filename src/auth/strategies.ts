import { User } from '@typings';
import bcrypt from 'bcryptjs';
import { GraphQLLocalStrategy } from 'graphql-passport';
import passport from 'passport';
import { isDefined } from '../utils/isDefined';

export const setStrategies = (prisma: Prisma) => {
  const graphQLLocalStrategyCallback = async (email: unknown, password: unknown, done: (err: Nullable<Error>, user?: Nullable<User>) => void) => {
    const user = await prisma.user({ email: email as string });

    if (!isDefined(user)) {
      return done(new Error('Authentication failed'));
    }

    const isValid = await bcrypt.compare(password as string, user.password);

    if (!isValid) {
      return done(new Error('Authentication failed'));
    }

    return done(null, user);
  };

  passport.use(new GraphQLLocalStrategy(graphQLLocalStrategyCallback));
};
