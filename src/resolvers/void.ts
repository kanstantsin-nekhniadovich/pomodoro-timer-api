import { GraphQLScalarType } from 'graphql';

export const Void = new GraphQLScalarType({
  name: 'Void',
  description: 'Represents NULL values',
  serialize: () => undefined,
  parseValue: () => undefined,
  parseLiteral: () => undefined,
});
