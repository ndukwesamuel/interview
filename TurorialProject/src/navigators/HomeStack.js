import { createStackNavigator } from "@react-navigation/stack";
import Menu from "../screens/Menu";
import Home from "../screens/Home";
import Level from "../screens/Level";
import LeaderBoard from "../screens/LeaderBoard";
import Settings from "../screens/Settings";
import ChangeUser from "../screens/ChangeUser";
import { Audio } from "expo-av";
import { useEffect } from "react";
import { useState } from "react";

const Stack = createStackNavigator();
const backgroundMusic = new Audio.Sound();
const HomeStack = () => {
  useEffect(() => {
    const loadBackgroundMusic = async () => {
      try {
        await backgroundMusic.loadAsync(require("../../assets/mob.mp3"));
        await backgroundMusic.setIsLoopingAsync(true); // Set the music to loop
        await backgroundMusic.playAsync();
      } catch (error) {
        console.error("Error loading background music:", error);
      }
    };

    const stopBackgroundMusic = async () => {
      try {
        await backgroundMusic.stopAsync();
        await backgroundMusic.unloadAsync();
      } catch (error) {
        console.error("Error stopping background music:", error);
      }
    };

    loadBackgroundMusic();

    return () => {
      stopBackgroundMusic();
    };
  }, []);
  return (
    <Stack.Navigator
      initialRouteName="Menu"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true, // Enable swipe gestures for navigation
        gestureDirection: "horizontal", // Set the swipe direction
      }}
    >
      <Stack.Screen name={"Menu"} component={Menu} />
      <Stack.Screen name={"Home"} component={Home} />
      <Stack.Screen name={"Level"} component={Level} />
      <Stack.Screen name={"Leaderboard"} component={LeaderBoard} />
      <Stack.Screen name={"Settings"} component={Settings} />
      <Stack.Screen name={"Changeuser"} component={ChangeUser} />
    </Stack.Navigator>
  );
};

export default HomeStack;
