import React, { useRef, useEffect } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import LottieView from "lottie-react-native";
const { height, width } = Dimensions.get("window");

export default function CameraStill() {
  const cameraRef = useRef(null);

  useEffect(() => {
    cameraRef.current.play(30, 35);
  }, []);

  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <LottieView
          source={require("../assets/img/camera3.json")}
          height={height * 0.2}
          width={height * 0.2}
          ref={cameraRef}
          loop
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    justifyContent: "center",
    alignItems: "center",
    right: width * 0.19,
  },
  container: {
    position: "absolute",
  },
});
