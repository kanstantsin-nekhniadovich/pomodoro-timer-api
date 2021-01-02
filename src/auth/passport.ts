import { User } from '@typings';
import passport from 'passport';

export const configurePassport = (prisma: Prisma) => {
  passport.serializeUser((user: User, done: (err: Nullable<Error>, id: string) => void) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id: string, done: (err: Nullable<Error>, user: Nullable<User>) => void) => {
    const user = await prisma.user({ id });
    done(null, user);
  });
};
