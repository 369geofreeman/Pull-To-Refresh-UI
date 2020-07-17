import React, { useEffect } from "react";
import { StyleSheet, Dimensions, View, Animated, Easing } from "react-native";
import LottieView from "lottie-react-native";

const { height, width } = Dimensions.get("window");

export default function Camera() {
  const hideCamera = new Animated.Value(0);

  useEffect(() => {
    animate();
  }, []);

  const animate = () => {
    Animated.timing(hideCamera, {
      toValue: 1,
      duration: 800,
      easing: Easing.elastic(1, 5),
      delay: 800,
      useNativeDriver: true,
    }).start();
  };

  const hideUp = hideCamera.interpolate({
    inputRange: [0, 1],
    outputRange: [1, -100],
  });

  return (
    <Animated.View style={[styles.outerContainer, { top: hideUp }]}>
      <Animated.View style={(styles.container, { marginTop: hideUp })}>
        <LottieView
          source={require("../assets/img/camera3.json")}
          style={styles.lottieContainer}
          height={height * 0.2}
          width={height * 0.2}
          autoPlay
          loop={false}
        />
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    justifyContent: "center",
    alignItems: "center",
    right: width * 0.17,
  },
  container: {
    position: "absolute",
  },
  lottieContainer: {
    flex: 1,
  },
});
