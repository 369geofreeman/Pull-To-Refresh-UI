import React, { useRef } from "react";
import { StyleSheet, Dimensions, View, Button } from "react-native";
import LottieView from "lottie-react-native";

const { windowWidth, windowHeight } = Dimensions.get("window");

export default function Main() {
  const camera = useRef(null);

  const toggleCamera = () => {
    camera.current.play(45, 98);
  };

  return (
    <View>
      <LottieView
        source={require("../assets/img/camera3.json")}
        ref={camera}
        // style={styles.lottieContainer}
        height={200}
        width={200}
        loop={false}
        autoPlay={false}
      />
      <Button onPress={toggleCamera} title="Press Me" />
    </View>
  );
}

const styles = StyleSheet.create({
  lottieContainer: {
    width: windowWidth * 0.98,
    height: windowWidth * 0.98,
    backgroundColor: "transparent",
    position: "absolute",
  },
});
