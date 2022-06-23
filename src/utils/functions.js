// Database bilgi ekleme,bilgiyi alma, bilgi silme ve değiştirme

import firebase from "./firebase"

import { getDatabase , ref , set , push} from "firebase/database";

export const AddForm = (info)=> {
    const db = getDatabase();
    const userRef = ref(db,"connect")
    const newUserRef=push(userRef)
    set((newUserRef),{
        username:info.username,
        phoneNumber : info.phoneNumber,
        gender : info.gender
    })
}