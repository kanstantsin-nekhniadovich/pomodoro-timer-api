export const isDefined = <T extends Unrestricted>(candidate: Maybe<T>): candidate is T => {
  return candidate !== null && candidate !== undefined;
};
