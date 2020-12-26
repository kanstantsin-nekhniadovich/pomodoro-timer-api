import { Project } from 'prisma-client';

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
    };
  }

  export namespace Mutation {
    export type Payload = {
      title?: string;
      status?: Status;
      note?: string;
    };

    export type CreateProject = {
      data: Required<Payload>;
    };

    export type UpdateProject = {
      data: Payload;
      where: UniqueIdPayload;
    };
  }
}
