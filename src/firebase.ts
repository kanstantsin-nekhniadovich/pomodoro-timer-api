import { initializeApp, credential } from 'firebase-admin';

initializeApp({
  credential: credential.cert({
    privateKey: process.env.FIREBASE_PRIVATE_KEY,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    projectId: process.env.FIREBASE_PROJECT_ID,
  }),
});
