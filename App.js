import * as React from "react";
import { Image,View, Text } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <Image
        style={{
          resizeMode: "cover",
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }} source={require("../OliversLingerie/images/splash.png")}></Image>
      </View>
  );
}
