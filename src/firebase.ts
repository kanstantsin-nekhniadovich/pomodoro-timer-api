import { initializeApp, credential } from 'firebase-admin';

export const initializeFirebase = () => {
  if (process.env.CI === 'true') {
    return;
  }

  initializeApp({
    credential: credential.cert({
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      projectId: process.env.FIREBASE_PROJECT_ID,
    }),
  });
};
