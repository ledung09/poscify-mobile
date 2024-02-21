import * as React from "react";
import "react-native-gesture-handler";
import Navigation from "./pages/Navigation";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";
import { Pressable, Text } from "react-native";
import { db } from "./firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

function App() {
  const auth = getAuth();
  getRedirectResult(auth)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access Google APIs.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...

      console.log(user);
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });

  return (
    // <Pressable
    //   onPress={async () => {
    //     const provider = new GoogleAuthProvider();

    //     // const docRef = doc(db, "user", "nocopyrightgamingmusic123@gmail.com");
    //     // const docSnap = await getDoc(docRef);

    //     // if (docSnap.exists()) {
    //     //   console.log("Document data:", docSnap.data());
    //     // }
    //     signInWithRedirect(auth, provider);
    //   }}
    // >
    //   <Text>Click me</Text>
    // </Pressable>
    <Navigation />
  );
}

export default App;