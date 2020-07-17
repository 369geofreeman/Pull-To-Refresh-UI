import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Dimensions,
  View,
  FlatList,
  RefreshControl,
} from "react-native";
import { DATA } from "../assets/DATA";
import Card from "./Card";
import NewCard from "./NewCard";
import Camera from "./Camera";
const { height, width } = Dimensions.get("window");

export default function Main() {
  const [data, setData] = useState(DATA);
  const [loading, setLoading] = useState(false);
  const [newCards, setNewCards] = useState([]);
  const newCard = { id: Math.random().toString(), title: "Heck YEAH BOIIIII" };

  const renderItem = ({ item }) =>
    item === data[0] ? (
      <Card title={item.title} fadeIn={loading} />
    ) : (
      <Card title={item.title} />
    );

  const resetDeck = async () => {
    setNewCards([]);
  };

  const onRefresh = async () => {
    await setLoading(true);
    await data.unshift(newCard);
    newCards.push(newCard);
    setTimeout(() => {
      resetDeck();
      setLoading(false);
    }, 3000);
  };

  // FInd a way to show card animating... or even at all while the setRTiimeourt is on

  return (
    <SafeAreaView style={styles.container}>
      {loading && <Camera />}
      {newCards.map((card) => (
        <NewCard key={card.id} title={card.title} />
      ))}
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
