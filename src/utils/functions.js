// Database bilgi ekleme,bilgiyi alma, bilgi silme ve değiştirme

import firebase from "./firebase"

import { getDatabase , ref , set , push , onValue, remove , update} from "firebase/database";

import { useEffect, useState } from "react";
import Toastify from "./toast";

// bilgi ekleme işlemi
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

// bilgi çağırma işlemi

export const useFetch = ()=> {
    const [isloading, setIsloading] = useState()
    const [contactList, setContactList] = useState()
    useEffect(() => {
        setIsloading(true)

        const db = getDatabase();
        const userRef = ref(db,"connect")

        onValue(userRef, (snapshot) => {
        const data = snapshot.val();
        const connectArray = []

        for(let id in data) {
            connectArray.push({id,...data[id]})
        }
        setContactList(connectArray)
        setIsloading(false)


        });
        
        },[])
    return {isloading,contactList}
 }

 /* bilgi silme işlemi . */
export const DeleteUser = (id)=> {
    const db = getDatabase();  
    remove(ref(db,"connect/" + id))

    Toastify("Kullanıcı bilgisi silindi")

 }

/* bilgi değiştirme işlemi */

export const EditUser = (info) => {
    const db = getDatabase();
    const editUserUpdate= {} ;

    editUserUpdate["connect/"+info.id] = info ;
    return update(ref(db),editUserUpdate)
}