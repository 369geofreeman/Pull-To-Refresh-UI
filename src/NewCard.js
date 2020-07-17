import React, { useEffect } from "react";
import { StyleSheet, Animated, Easing, View } from "react-native";
import Card from "./Card";

export default function NewCard({ title }) {
  const cardAnimation = new Animated.Value(0);

  useEffect(() => {
    animate();
  }, []);

  const animate = () => {
    Animated.timing(cardAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    });
  };

  const size = cardAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [10, 100],
  });

  return <Card title={title} />;

  return (
    <Animated.View style={{ transform: { scale: size } }}>
      <Card title={title} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({});
