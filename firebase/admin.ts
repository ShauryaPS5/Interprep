import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

// Initialize Firebase Admin SDK
function initFirebaseAdmin() {
  const apps = getApps();

  const privateKey = process.env.FIREBASE_PRIVATE_KEY;
  if (!privateKey) {
    console.error("FIREBASE_PRIVATE_KEY is missing");
  } else {
    console.log("FIREBASE_PRIVATE_KEY length:", privateKey.length);
    console.log("Starts with '-----BEGIN':", privateKey.startsWith("-----BEGIN"));

    let formattedKey = privateKey.replace(/\\n/g, "\n");

    const keyMatch = formattedKey.match(/-----BEGIN PRIVATE KEY-----[\s\S]+-----END PRIVATE KEY-----/);
    if (keyMatch) {
      formattedKey = keyMatch[0];
    } else {
      // Fallback to previous logic if not found
      formattedKey = formattedKey.trim();
      if (formattedKey.startsWith('"')) formattedKey = formattedKey.substring(1);
      if (formattedKey.endsWith('"')) formattedKey = formattedKey.substring(0, formattedKey.length - 1);
    }

    if (!apps.length) {
      initializeApp({
        credential: cert({
          projectId: process.env.FIREBASE_PROJECT_ID,
          clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
          privateKey: formattedKey,
        }),
      });
    }
  }

  return {
    auth: getAuth(),
    db: getFirestore(),
  };
}

export const { auth, db } = initFirebaseAdmin();
