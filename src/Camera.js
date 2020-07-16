import React, { useRef } from "react";
import { StyleSheet, Dimensions, View, Button } from "react-native";
import LottieView from "lottie-react-native";

const { height, width } = Dimensions.get("window");

export default function Camera() {
  const camera = useRef(null);

  const toggleCamera = () => {
    camera.current.play(45, 98);
  };

  return (
    <View>
      <LottieView
        source={require("../assets/img/camera3.json")}
        // ref={camera}
        style={styles.lottieContainer}
        height={200}
        width={200}
        // loop
        autoPlay
        loop={false}
        // autoPlay={false}
      />
      {/* <Button onPress={toggleCamera} title="Press Me" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  lottieContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    flex: 1,
  },
});
