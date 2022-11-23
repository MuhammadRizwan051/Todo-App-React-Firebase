import app from "./firebaseconfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getDatabase, ref, set, push, onValue, onChildAdded } from "firebase/database";
import { Redirect } from "react-router-dom";


const auth = getAuth(app);
const database = getDatabase(app);

let signUpUser = (obj) => {
  let { email, password } = obj;

  // === this promise will return on Signup page. ===
  return new Promise((resolve, reject) => {
    // === this "then" will give the status of Authentication. ===
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // user successfully registerd in authentication
        const user = userCredential.user;
        const refrence = ref(database, `users/${user.uid}`);
        obj.id = user.uid
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

let checkUser = () => {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const uid = user.uid
        resolve(uid)
      }
      else {
        // User is signed out
        reject("No user is Login ..")
      }
    })
  })
}

let sendData = (obj, nodeName, id) => {
  let postListRef;

  return new Promise((resolve, reject) => {
    if (id) {
      // edit case
      // id is present
      postListRef = ref(database, `${nodeName}/${id}`)
    }
    else {
      // add case
      // id is not available
      let addRef = ref(database, nodeName)
      obj.id = push(addRef).key
      postListRef = ref(database, `${nodeName}/${obj.id}`)
    }
    set(postListRef, obj)
      .then(() => {
        console.log(`Data Send Successfully on this node ${nodeName}/${obj.id}`)
      })
      .catch((err) => {
        console.log(err)
      })
  })
}


let getData = (nodeName, id) => {
  let refernece = ref(database, `${nodeName}/${id ? id : ""}`);
  return new Promise((resolve, reject) => {
    onValue(refernece,
      (snapshot) => {
        if (snapshot.exists()) {
          let data = snapshot.val();
          if (id) {
            resolve(data)
          } else {
            let arr = Object.values(data)
            resolve(arr)
          }
        } else {
          reject("No Data Found")
        }
      }, {
      onlyOnce: false
    }
    );
  });
};


let logoutUser = () => {
  return new Promise((resolve, reject) => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        resolve("user Logged Out successfully")
      })
      .catch((error) => {
        // An error happened.
        reject(error)
      });
  });
};



export { signUpUser, loginUser, checkUser, sendData, getData, logoutUser };