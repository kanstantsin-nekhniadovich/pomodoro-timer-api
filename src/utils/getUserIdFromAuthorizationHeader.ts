import { AuthenticationError } from 'apollo-server-express';
import { Request } from 'express';
import jwt from 'jsonwebtoken';
import { isDefined } from './isDefined';

export const getUserIdFromAuthorizationHeader = (request: Request): string => {
  const { authorization } = request.headers;

  if (!isDefined(authorization)) {
    throw new AuthenticationError('Authentication is required');
  }

  const token = authorization.replace('Bearer ', '');
  const { userId } = jwt.verify(token, process.env.JWT_SECRET) as { userId: string };

  return userId;
};
