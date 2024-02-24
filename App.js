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
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { db } from "./firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { settings } from "./setting/setting";
import { AccountProvider, useAccount } from "./components/hooks/useAccount";

import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: settings.color.primary,
    secondary: "yellow",
  },
};

function App() {
  return (
    <PaperProvider theme={theme}>
      <AccountProvider>
        <MainPage />
      </AccountProvider>
    </PaperProvider>
  );
}

function MainPage() {
  const { account, setAccount } = useAccount();

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
          setAccount({
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
            role: docSnap.data().role,
          });
        } else {
          setLoginFail(true);
          signOut(auth)
            .then(() => {
              // Sign-out successful.
            })
            .catch((error) => {
              // An error happened.
            });
        }
      };

      verify();
    }
  });

  return (
    <>{!account ? <NonSignInHome loginFail={loginFail} /> : <Navigation />}</>
  );
}

function NonSignInHome({ loginFail }) {
  const auth = getAuth();

  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          zIndex: 100,
          marginTop: 20,
          height: "calc(100% - 410px)",
        }}
      >
        <Image
          source={{
            uri: "https://png.pngtree.com/png-vector/20230627/ourmid/pngtree-girl-studying-cute-cartoon-illustration-png-image_7333001.png",
          }}
          style={{
            marginHorizontal: "auto",
            width: "65%",
            height: "240px",
            objectFit: "contain",
            top: 0,
            zIndex: 100,
          }}
        />
      </View>
      <View
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
          backgroundColor: "white",
          position: "absolute",
          bottom: 0,
          width: "100%",
          zIndex: 100,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          paddingVertical: 40,
          paddingHorizontal: 30,
        }}
      >
        <Text
          style={{
            fontSize: 40,
            fontWeight: 700,
            lineHeight: "30px",
            marginBottom: 13,
          }}
        >
          Chào mừng tới
        </Text>
        <Text
          style={{
            fontSize: 48,
            fontWeight: 800,
            color: settings.color.primary,
            marginBottom: 12,
          }}
        >
          Poscify
        </Text>
        <Text
          style={{ color: "rgb(121 121 121)", fontSize: 17, marginBottom: 70 }}
        >
          Hệ thống phân tích và cải thiện tư thế ngồi cho trẻ.
        </Text>

        <Pressable
          onPress={async () => {
            const provider = new GoogleAuthProvider();
            signInWithRedirect(auth, provider);
          }}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 15,
            paddingVertical: 10,
            paddingHorizontal: 20,
            height: 50,
            border: "2px solid black",
            borderRadius: 25,
          }}
        >
          <Image
            source={{
              uri: "https://cdn.iconscout.com/icon/free/png-256/free-google-1772223-1507807.png",
            }}
            style={{
              width: "20px",
              height: "20px",
              objectFit: "contain",
            }}
          />
          <Text style={{ fontSize: 18, marginBottom: 2, fontWeight: 500 }}>
            Đăng nhập bằng Google
          </Text>
        </Pressable>

        {loginFail && (
          <Text
            style={{
              fontSize: 16,
              color: "red",
              fontWeight: 500,
              marginTop: 15,
            }}
          >
            *Tài khoản không tồn tại trong hệ thống
          </Text>
        )}
      </View>
      <LinearGradient
        // Button Linear Gradient
        colors={["rgb(255 123 66)", "white"]}
        style={{ height: "100%" }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: "100%",
    position: "relative",
    flex: 1,
  },
});

export default App;
