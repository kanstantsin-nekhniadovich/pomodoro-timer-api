import { Project } from 'prisma-client';
import { ProjectQuery } from '@typings';

export const Query = {
  projects: (_parent: unknown, args: ProjectQuery.Projects, { prisma }: Context): Promise<Project[]> => {
    return prisma.projects(args);
  },
  project: (_parent: unknown, args: ProjectQuery.Project, { prisma }: Context): Promise<Nullable<Project>> => {
    return prisma.project(args.where);
  },
};
