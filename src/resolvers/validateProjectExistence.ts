import { UserInputError } from 'apollo-server-express';
import { PrismaClient } from '@prisma/client';
import { isDefined } from '../utils/isDefined';

export const validateProjectExistence = (prisma: PrismaClient) => async (id: Id) => {
  /* tslint:disable-next-line:await-promise */
  const existingProject = await prisma.project.findUnique({ where: { id } });

  if (!isDefined(existingProject)) {
    throw new UserInputError('Project does not exist');
  }

  return;
};
