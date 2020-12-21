import { Prisma, ProjectCreateInput, ProjectWhereUniqueInput } from 'prisma-client';

export namespace ProjectQuery {
  export type Project = {
    where: ProjectWhereUniqueInput;
  };

  export type Projects = ParamsType<Prisma['projects']>;
}

export namespace ProjectMutation {
  export type CreateProject = {
    data: ProjectCreateInput;
  };

  export type UpdateProject = ParamsType<Prisma['updateProject']>;
  export type DeleteProject = {
    where: ProjectWhereUniqueInput;
  };
}
