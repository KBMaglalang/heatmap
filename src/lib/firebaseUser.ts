import { doc, getDoc, setDoc, Timestamp } from "firebase/firestore";
import { db } from "../../firebase";

export async function ensureUserExists(session: any) {
  // If no session, return immediately
  if (!session) return;

  // Define a reference to the user document in Firestore
  const userRef = doc(db, "users", session.user?.email!);

  // Fetch the user document
  const userDoc = await getDoc(userRef);

  // If the user doesn't exist, set their data
  if (!userDoc.exists()) {
    const userData = {
      name: session.user?.name,
      email: session.user?.email,
      createdAt: Timestamp.now(),
      notification: false,
      theme: false,
      timezone: "",
    };
    await setDoc(userRef, userData);
  }
}
