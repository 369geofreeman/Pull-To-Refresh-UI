import React from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
const { height, width } = Dimensions.get("window");

export default function Card({ title, fadeIn, img }) {
  return (
    <View style={[styles.container, { opacity: fadeIn ? 0 : 1 }]}>
      <Image source={img} style={styles.imageStyle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    height: height * 0.3,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: height * 0.03,
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: "white",
  },
  imageStyle: {
    width: width * 0.9,
    height: height * 0.3,
  },
});
