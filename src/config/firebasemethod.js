import app from './firebaseconfig'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";


const auth = getAuth(app);
const database = getDatabase(app);


let signUpUser = (obj) => {
    let { email, password, userName, contact } = obj
    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential;
                const refrence = ref(database, `users/${user.uid}`)
                set(refrence, obj)
                    .then(() => {
                        resolve('User Created Successfully and send to database')
                    })
                    .catch((errr) => {
                        reject()
                    })
            })
            .catch((err) => { })
    })
}

export { signUpUser }
