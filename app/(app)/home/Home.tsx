import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { TabView, SceneMap } from "react-native-tab-view";
import Overview from "./Overview";
import DailyHabits from "./DailyHabits";
import { Dimensions } from "react-native";

const initialLayout = { width: Dimensions.get("window").width };
const Home = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "overview", title: "Resumen" },
    { key: "habits", title: "Hábitos" },
  ]);
  const renderScene = SceneMap({
    overview: Overview,
    habits: DailyHabits,
  });
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        style={{ flex: 1 }}
        renderTabBar={() => null}
      />
    </SafeAreaView>
  );
};

export default Home;
