import admin from "firebase-admin";
import { getApps } from "firebase-admin/app";

// * A service account key from Firebase is required.
// const serviceAccount = require("../serviceAccountKey.json");
// ! This approach should be avoided. Here is a better way to handle it.

const serviceAccount = JSON.parse(
  process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string
);

if (!getApps().length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const adminDb = admin.firestore();

export { adminDb };
