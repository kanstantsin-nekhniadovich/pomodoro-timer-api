import { Task } from '@prisma/client';

type TaskOrderByInput = {
  id?: SortOrder
  title?: SortOrder
  cyclesCount?: SortOrder
  workTime?: SortOrder
  breakTime?: SortOrder
  status?: SortOrder
  remainingTime?: SortOrder
  currentCycle?: SortOrder
  projectId?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder,
};

type ConnectTaskToProject = {
  connect: UniqueIdPayload;
};

export namespace TaskResolvers {
  export type Tasks = {
    query?: string;
    skip?: number;
    take?: number;
    orderBy?: TaskOrderByInput;
    projectId: Id;
  };

  export type CreateTask = {
    data: {
      title: string;
      cyclesCount: number;
      workTime: number;
      breakTime: number;
      project: ConnectTaskToProject
    };
  };

  export type UpdateTask = {
    data: {
      title?: string;
      cyclesCount?: number;
      workTime?: number;
      breakTime?: number;
      status?: Status;
      remainingTime?: number;
      currentCycle?: number;
    };
    where: UniqueIdPayload;
  };
}
