import jwt from 'jsonwebtoken';

import { generateToken } from '../generateToken';

const USER_ID = 'test-id-123qwe345sdf';

describe('generateToken', () => {
  it('should generate token', async () => {
    const token = await generateToken(USER_ID);

    expect(token).toBeDefined();
  });

  it('should verify token', async () => {
    const token = await generateToken(USER_ID);
    const { userId } = jwt.verify(token, process.env.JWT_SECRET) as { userId: string };

    expect(userId).toEqual(USER_ID);
  });
});
