import * as React from "react";
import "react-native-gesture-handler";
import Navigation from "./pages/Navigation";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  signOut,
} from "firebase/auth";
import { Image, Pressable, Text, View } from "react-native";
import { db } from "./firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { settings } from "./setting/setting";

function App() {
  const [accountInfo, setAccountInfo] = React.useState(null);
  const [loginFail, setLoginFail] = React.useState(false);
  const auth = getAuth();

  getRedirectResult(auth).then((result) => {
    // This gives you a Google Access Token. You can use it to access Google APIs.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...

    if (user) {
      const verify = async () => {
        const docRef = doc(db, "user", user.email);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setAccountInfo({
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          });
        } else {
          signOut(auth)
            .then(() => {
              // Sign-out successful.
              setLoginFail(true);
            })
            .catch((error) => {
              // An error happened.
            });
        }
      };

      verify();
    }
  });
  // .catch((error) => {
  //   // Handle Errors here.
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   // The email of the user's account used.
  //   const email = error.customData.email;
  //   // The AuthCredential type that was used.
  //   const credential = GoogleAuthProvider.credentialFromError(error);
  //   // ...
  // });

  return (
    <>
      {!accountInfo ? <NonSignInHome loginFail={loginFail} /> : <Navigation />}
    </>
  );
}

function NonSignInHome({ loginFail }) {
  const auth = getAuth();

  return (
    <View>
      <Pressable
        onPress={async () => {
          const provider = new GoogleAuthProvider();

          // const docRef = doc(db, "user", "nocopyrightgamingmusic123@gmail.com");
          // const docSnap = await getDoc(docRef);

          // if (docSnap.exists()) {
          //   console.log("Document data:", docSnap.data());
          // }
          signInWithRedirect(auth, provider);
        }}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 18,
          paddingVertical: 10,
          paddingHorizontal: 20,
          height: 50,
          border: "1px solid #C8C8C8",
          borderRadius: 8,
        }}
      >
        <Image
          source={{
            uri: "https://cdn.iconscout.com/icon/free/png-256/free-google-1772223-1507807.png",
          }}
          style={{
            marginHorizontal: "auto",
            width: "20px",
            height: "20px",
            objectFit: "contain",
          }}
        />
        <Text style={{ fontSize: 21, marginBottom: 2, fontWeight: 500 }}>
          Đăng nhập bằng Google
        </Text>
      </Pressable>
      {loginFail && "this is text"}
    </View>
  );
}

export default App;
