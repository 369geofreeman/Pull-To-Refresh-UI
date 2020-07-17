import React, { useEffect } from "react";
import { StyleSheet, Animated, Easing, View } from "react-native";
import Card from "./Card";

export default function NewCard({ title }) {
  const cardAnimation = new Animated.Value(0);
  const cardTopAnimation = new Animated.Value(0);
  const animationDuration = 2000;

  useEffect(() => {
    animate();
    animateTop();
  }, []);

  const animate = () => {
    Animated.timing(cardAnimation, {
      toValue: 1,
      duration: 800,
      easing: Easing.elastic(1, 5),
      delay: animationDuration,
      useNativeDriver: true,
    }).start();
  };

  const animateTop = () => {
    Animated.spring(cardTopAnimation, {
      toValue: 1,
      duration: 800,
      useNativeDriver: false,
      delay: animationDuration,
      // easing: Easing.bounce,
    }).start();
  };

  const size = cardAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });
  const flip = cardAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-1, 1],
  });
  const lowerCard = cardTopAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-20, 130],
  });

  return (
    <Animated.View style={{ height: 1, top: lowerCard }}>
      <Animated.View
        style={{
          transform: [{ scale: size }, { scaleY: flip }],
        }}
      >
        <Card title={title} />
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({});
