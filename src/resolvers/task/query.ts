import { Task } from '@typings';
import { isDefined } from '../../utils/isDefined';

export const Query = {
  tasks: (_parent: unknown, args: Task.Query.Tasks, { prisma }: Context): Promise<Task[]> => {
    const { query, skip, after, before, first, last } = args;
    const optArgs = { last, skip, first, after, before };

    if (isDefined(query)) {
      Object.assign(optArgs, {
        where: {
          OR: [{
            title_contains: query,
          }, {
            note_contains: query,
          }],
        },
      });
    }

    return prisma.tasks(optArgs);
  },
  task: (_parent: unknown, args: UniqueIdPayload, { prisma }: Context): Promise<Nullable<Task>> => {
    return prisma.task({ id: args.id });
  },
};
