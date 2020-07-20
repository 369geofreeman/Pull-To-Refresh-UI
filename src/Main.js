import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Dimensions,
  FlatList,
  RefreshControl,
  Animated,
  Easing,
} from "react-native";
import { DATA } from "../assets/DATA";
import Card from "./Card";
import NewCard from "./NewCard";
import Camera from "./Camera";
import CameraStill from "./CameraStill";
const { height, width } = Dimensions.get("window");

export default function Main() {
  const [data, setData] = useState(DATA);
  const [loading, setLoading] = useState(false);
  const animateFlatlist = new Animated.Value(0);
  const animateFlatlistBack = new Animated.Value(0);
  const newCard = {
    id: Math.random().toString(),
    img: require("../assets/img/card0.jpeg"),
  };
  const [newCards, setNewCards] = useState([]);

  useEffect(() => {
    if (loading) {
      animateBack();
    }
  });

  const renderItem = ({ item }) =>
    item === data[0] ? (
      <Card title={item.title} fadeIn={loading} img={item.img} />
    ) : (
      <Card title={item.title} img={item.img} />
    );

  const resetDeck = async () => {
    setNewCards([]);
  };

  const animate = () => {
    Animated.timing(animateFlatlist, {
      toValue: 1,
      duration: 500,
      easing: Easing.inOut,
      useNativeDriver: false,
    }).start();
  };

  const animateBack = () => {
    animateFlatlistBack.setValue(0);
    Animated.timing(animateFlatlistBack, {
      toValue: 1,
      duration: 500,
      delay: 2200,
      easing: Easing.elastic(1, 4),
      useNativeDriver: false,
    }).start();
  };

  const onRefresh = async () => {
    await setLoading(true);
    await data.unshift(newCard);
    setNewCards([...newCards, newCard]);
    animate();
    setTimeout(() => {
      resetDeck();
      setLoading(false);
    }, 3000);
  };

  let animateRow = animateFlatlist.interpolate({
    inputRange: [0, 1],
    outputRange: [-400, 0],
  });

  let scaleTop = animateFlatlistBack.interpolate({
    inputRange: [0, 1],
    outputRange: [1, height * 0.36],
  });

  return (
    <SafeAreaView style={styles.container}>
      {loading ? <Camera /> : <CameraStill />}
      {newCards.map((card) => (
        <NewCard key={card.id} title={card.title} img={card.img} />
      ))}
      <Animated.View style={{ height: 75, marginTop: scaleTop }} />
      <Animated.View style={{ marginTop: loading && animateRow }}>
        <FlatList
          style={{ backgroundColor: "transparent" }}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          refreshControl={
            <RefreshControl
              onLayout={(e) => console.log(e.nativeEvent)}
              tintColor="transparent"
              colors={["transparent"]}
              style={{ backgroundColor: "transparent", height: height * 0.13 }}
              refreshing={loading}
              onRefresh={onRefresh}
            />
          }
        />
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
