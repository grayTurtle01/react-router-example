import { initializeApp } from "firebase/app";
import { collection, doc, getDoc, getDocs, 
    getFirestore, query, where } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyC0iJ6KmRz0-jka_Nms6yizpP9Ceknom3M",
  authDomain: "project-name-d1149.firebaseapp.com",
  projectId: "project-name-d1149",
  storageBucket: "project-name-d1149.appspot.com",
  messagingSenderId: "371696035485",
  appId: "1:371696035485:web:01c605f3b25853215f9674"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

let collectionName = '12345'
const collectionRef = collection(db, collectionName)

async function getAllObjects(){

    const snapShot = await getDocs(collectionRef)

    const array = snapShot.docs.map( doc => ({
        ...doc.data(),
        id: doc.id
    }))

    return array
}

async function getObject(id){
    
    const docRef = doc(db, collectionName, id)
    const snapShot = await getDoc(docRef)

    return {
        ...snapShot.data(),
        id: snapShot.id
    }

}

async function getFilteredObjects(){

    const q = query( collectionRef, where("hostId", "==", "123") )

    const snapShot = await getDocs(q)

    const array = snapShot.docs.map( doc => ({
        ...doc.data(),
        id: doc.id
    }))


    return array
}



export { getAllObjects, getObject, getFilteredObjects }