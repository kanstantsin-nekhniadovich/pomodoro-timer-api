import { Prisma, TaskWhereUniqueInput, TaskCreateInput, Task, TaskOrderByInput } from 'prisma-client';

export type Task = Task;

export namespace Task {
  export namespace Query {
    export type Tasks = {
      query?: string;
      skip?: number;
      after?: string;
      before?: string;
      first?: number;
      last?: number;
      orderBy?: TaskOrderByInput;
    };
  }

  type Payload = {
    title?: string;
    cyclesCount?: number;
    workTime?: number;
    breakTime?: number;
    status?: Status;
    remainingTime?: number;
    currentCycle?: number;
  };

  type ConnectTaskToProject = {
    connect: UniqueIdPayload;
  };

  export namespace Mutation {
    export type CreateTask = {
      data: Required<Payload> & { project: ConnectTaskToProject };
    };

    export type UpdateTask = {
      data: Payload;
      where: UniqueIdPayload;
    };
  }
}
