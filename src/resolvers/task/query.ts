import { TaskResolvers } from '@typings';
import { Task } from '@prisma/client';

import { isDefined } from '../../utils/isDefined';

export const Query = {
  tasks: (_parent: unknown, args: TaskResolvers.Tasks, { prisma }: Context): Promise<Task[]> => {
    const { query, skip, take, orderBy = { createdAt: 'desc' }, projectId } = args;
    const optArgs = { skip, take, orderBy };
    const where = { project: { id: projectId } };

    if (isDefined(query)) {
      Object.assign(where, {
        title: {
          contains: query,
        },
      });
    }

    return prisma.task.findMany({ where, ...optArgs });
  },
  task: (_parent: unknown, args: UniqueIdPayload, { prisma }: Context): Promise<Nullable<Task>> => {
    return prisma.task.findUnique({ where: { id: args.id } });
  },
};
