import { Project } from 'prisma-client';
import { ProjectMutation } from '@typings';

export const Mutation = {
  createProject: (_parent: undefined, args: ProjectMutation.CreateProject, { prisma }: Context): Promise<Project> => {
    return prisma.createProject(args.data);
  },
  updateProject: (_parent: unknown, args: ProjectMutation.UpdateProject, { prisma }: Context): Promise<Project> => {
    return prisma.updateProject(args);
  },
  deleteProject: (_parent: unknown, args: ProjectMutation.DeleteProject, { prisma }: Context): Promise<Project> => {
    return prisma.deleteProject(args.where);
  },
};
