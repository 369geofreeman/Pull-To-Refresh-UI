import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  FlatList,
  RefreshControl,
} from "react-native";
import { DATA } from "../assets/DATA";
import Card from "./Card";
import Camera from "./Camera";

export default function Main() {
  const [loading, setLoading] = useState(false);
  const renderItem = ({ item }) => <Card title={item.title} />;

  const pushNewCards = async () => {
    DATA.unshift({
      id: Math.random().toString(),
      title: "FUCK YEAH BOIIIII",
    });
  };

  const onRefresh = async () => {
    setLoading(true);
    setTimeout(() => {
      pushNewCards();
      setLoading(false);
    }, 3000);
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading && <Camera />}
      <FlatList
        style={{ backgroundColor: "transparent" }}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl
            onLayout={(e) => console.log(e.nativeEvent)}
            tintColor="transparent"
            colors={["transparent"]}
            style={{ backgroundColor: "transparent" }}
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
