import { setStrategies } from './strategies';
import { configurePassport } from './passport';

export const auth = (prisma: Prisma) => {
  configurePassport(prisma);
  setStrategies(prisma);
};
