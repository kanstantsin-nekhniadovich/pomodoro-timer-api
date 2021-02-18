import { Project, ProjectOrderByInput } from 'prisma-client';

export type Project = Project;

export namespace Project {
  export namespace Query {
    export type Projects = {
      query?: string;
      skip?: number;
      after?: string;
      before?: string;
      first?: number;
      last?: number;
      orderBy?: ProjectOrderByInput;
    };
  }

  export namespace Mutation {
    export type CreateProject = {
      data: {
        title: string;
        status: Status;
      };
    };

    export type UpdateProject = {
      data: {
        title?: string;
        status?: Status;
        note?: string;
      };
      where: UniqueIdPayload;
    };
  }
}
