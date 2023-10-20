import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Text, Animated, Easing } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import fonts from "../layouts/fonts";
import Button from "../components/Button";
import colors from "../layouts/colors";

const Menu = ({ navigation }) => {
  const slideAnima = useRef(new Animated.Value(-100)).current;
  const slideAnim = useRef(new Animated.Value(-200)).current;
  const slideAni = useRef(new Animated.Value(-300)).current;
  const slideAn = useRef(new Animated.Value(-400)).current;

  useEffect(() => {
    // Define the slide-in animations
    const slideInAnimation = Animated.timing(slideAnima, {
      toValue: 0,
      duration: 1000, // Adjust the duration as needed
      easing: Easing.ease,
      useNativeDriver: false,
    });
    const slideInAnimatio = Animated.timing(slideAnim, {
      toValue: 0,
      duration: 1000, // Adjust the duration as needed
      easing: Easing.ease,
      useNativeDriver: false,
    });
    const slideInAnimati = Animated.timing(slideAni, {
      toValue: 0,
      duration: 1000, // Adjust the duration as needed
      easing: Easing.ease,
      useNativeDriver: false,
    });
    const slideInAnimat = Animated.timing(slideAn, {
      toValue: 0,
      duration: 1000, // Adjust the duration as needed
      easing: Easing.ease,
      useNativeDriver: false,
    });
    slideInAnimation.start();
    slideInAnimatio.start();
    slideInAnimati.start();
    slideInAnimat.start();
  }, []);

  return (
    <LinearGradient
      colors={[colors.primarylight, colors.primarydark]}
      style={styles.container}
    >
      <Text style={styles.heading}>Menu</Text>
      <Animated.View style={{ transform: [{ translateX: slideAnima }] }}>
        <Button
          title="PLAY"
          textstyle={{ fontFamily: fonts.extraBold }}
          onPress={() => navigation.navigate("Home")}
        />
      </Animated.View>
      <Animated.View style={{ transform: [{ translateX: slideAnim }] }}>
        <Button
          title="LEVEL"
          textstyle={{ fontFamily: fonts.extraBold }}
          onPress={() => navigation.navigate("Level")}
        />
      </Animated.View>
      <Animated.View style={{ transform: [{ translateX: slideAni }] }}>
        <Button
          title="LEADERBOARD"
          textstyle={{ fontFamily: fonts.extraBold, fontSize: 35 }}
          style={{ paddingHorizontal: 0 }}
          onPress={() => navigation.navigate("Leaderboard")}
        />
      </Animated.View>
      <Animated.View style={{ transform: [{ translateX: slideAn }] }}>
        <Button
          title="SETTING"
          textstyle={{ fontFamily: fonts.extraBold }}
          onPress={() => navigation.navigate("Settings")}
        />
      </Animated.View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  heading: {
    color: colors.primarydark,
    fontSize: 100,
    alignSelf: "center",
    fontFamily: fonts.extraBold,
  },
});

export default Menu;
