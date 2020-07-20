import React, { useEffect } from "react";
import { StyleSheet, Animated, Easing, Dimensions } from "react-native";
import Card from "./Card";
const { width, height } = Dimensions.get("window");

export default function NewCard({ title, img }) {
  const cardAnimation = new Animated.Value(0);
  const cardTopAnimation = new Animated.Value(0);
  const animationDelay = 2000;
  const animationDuration = 1000;

  useEffect(() => {
    animate();
    animateTop();
  }, []);

  const animate = () => {
    Animated.timing(cardAnimation, {
      toValue: 1,
      duration: animationDuration,
      easing: Easing.elastic(1, 9),
      delay: animationDelay,
      useNativeDriver: false,
    }).start();
  };

  const animateTop = () => {
    Animated.spring(cardTopAnimation, {
      toValue: 1,
      duration: animationDuration,
      useNativeDriver: false,
      delay: animationDelay,
    }).start();
  };

  const size = cardAnimation.interpolate({
    inputRange: [0, 0.3, 1],
    outputRange: [0, 0, 1],
  });
  const flip = cardAnimation.interpolate({
    inputRange: [0, 0.3, 1],
    outputRange: [-1, -1, 1],
  });
  const lowerCard = cardTopAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [height * 0.5, 130],
  });

  return (
    <Animated.View
      style={{
        transform: [{ scale: size }, { scaleY: flip }],
        height: 1,
        top: lowerCard,
        zIndex: 100,
      }}
    >
      <Card title={title} img={img} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({});
