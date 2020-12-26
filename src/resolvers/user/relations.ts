import { Project, User as UserType } from '@typings';
import { getUserIdFromAuthorizationHeader } from '../../utils/getUserIdFromAuthorizationHeader';

export const User = {
  projects: (_parent: UserType, _args: unknown, { prisma, request }: Context): Promise<Project[]> => {
    const id = getUserIdFromAuthorizationHeader(request);
    return prisma.user({ id }).projects();
  },
};
