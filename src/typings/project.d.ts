import { Project } from '@prisma/client';

type ProjectOrderByInput = {
  id?: SortOrder
  title?: SortOrder
  status?: SortOrder
  note?: SortOrder
  ownerId?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder,
};

export namespace ProjectResolvers {
  export type Projects = {
    query?: string;
    skip?: number;
    take?: number;
    orderBy?: ProjectOrderByInput;
  };

  export type ProjectsResponse = {
    projects: Project[];
    totalCount: number;
  };

  export type CreateProject = {
    data: {
      title: string;
      status: Status;
    };
  };

  export type DeleteProject = {
    project: Project;
    totalCount: number;
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
