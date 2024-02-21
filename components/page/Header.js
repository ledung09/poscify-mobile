import {
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  Pressable,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { settings } from "../../setting/setting";
import { useNavigation } from "@react-navigation/native";

export function Header({ title, goBackShown = true, ...props }) {
  const navigation = useNavigation();
  return (
    <View
      {...props}
      style={[
        {
          position: "relative",
          height: 68,
          padding: 15,
          backgroundColor: "white",
        },
        props.style,
      ]}
    >
      <View
        style={{ position: "absolute", width: "calc(100% - 30px)", height: 38 }}
      >
        <Text
          style={{
            marginVertical: "auto",
            textAlign: "center",
            fontSize: 21,
            fontWeight: 700,
          }}
        >
          {title}
        </Text>
      </View>
      {goBackShown && (
        <Pressable
          style={{
            borderRadius: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 38,
            height: 38,
            border: "1px solid #C8C8C8",
          }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons
            name="chevron-back"
            color={settings.color.gray}
            size={19}
            style={{ marginRight: 1 }}
          />
        </Pressable>
      )}
    </View>
  );
}
