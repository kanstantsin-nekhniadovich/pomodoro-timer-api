import { Prisma, TaskWhereUniqueInput, TaskCreateInput } from 'prisma-client';

export namespace TaskQuery {
  export type Tasks = ParamsType<Prisma['tasks']>;

  export type Task = {
    where: TaskWhereUniqueInput;
  };
}

export namespace TaskMutation {
  export type CreateTask = {
    data: TaskCreateInput;
  };

  export type UpdateTask = ParamsType<Prisma['updateTask']>;

  export type DeleteTask = {
    where: TaskWhereUniqueInput;
  };
}
