import { firebasedb } from "../firebase";

export const userService = {
    getUser
};

function getUser(id) { 
    return firebasedb.collection('users').doc(id).get()
        .then(snapshot => snapshot.data());
}
