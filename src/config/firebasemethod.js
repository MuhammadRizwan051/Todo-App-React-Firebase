import app from "./firebaseconfig";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { getDatabase, ref, set, onValue } from "firebase/database";

const auth = getAuth(app);
const database = getDatabase(app);

let signUpUser = (obj) => {
    let { email, password, userName, contact } = obj;

    // === this promise will return on Signup page. ===
    return new Promise((resolve, reject) => {
        // === this "then" will give the status of Authentication. ===
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // user successfully registerd in authentication
                const user = userCredential.user;
                const refrence = ref(database, `users/${user.uid}`);
                set(refrence, obj)
                    // === this "then" will give the status of database function
                    .then(() => {
                        // this "resolve" is our custom message which will show in signup page "then"

                        // this "resolve" is our custom message which will show in signup page "then"
                        resolve("User Created Successfully and send to database");
                    })
                    .catch((errr) => {
                        reject(errr);
                    });
            })
            .catch((err) => {
                reject(err);
            });
    });
};

let loginUser = (obj) => {
    let { email, password } = obj;
    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ...
                const reference = ref(database, `users/${user.uid}`);
                onValue(reference, (e) => {
                    let status = e.exists();
                    console.log(status);
                    if (status) {
                        resolve(e.val());
                    } else {
                        reject("Data Not Found :(");
                    }
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                reject(errorMessage);
            });
    });
};

export { signUpUser, loginUser };