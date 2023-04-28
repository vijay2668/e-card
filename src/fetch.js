import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

export default async function getData() {
  const uid = localStorage.getItem("uid")
    if(uid){
      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        return docSnap.data()
      } else {
        console.log("No such document!");
      }
    }
  }