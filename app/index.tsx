import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
import { Navigator, useRouter } from "expo-router";
import { useNavigation } from '@react-navigation/native';
import { Router } from "expo-router";
import React from 'react';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

export default function Index() {
  const router = useRouter();
  return (
    <View style={styles.container}>
            <View style={styles.logoContainer}>
        <Svg width="221" height="220" viewBox="0 0 221 220" fill="none">
          <Path d="M143.5 177C155.374 177 165 186.626 165 198.5V198.5C165 210.374 155.374 220 143.5 220H4.41075e-06V201C4.41075e-06 187.745 10.7452 177 24 177H143.5Z" fill="url(#paint0_linear_346_21)"/>
          <Path d="M5.61368e-07 76C2.51333e-07 64.402 9.40202 55 21 55V55C32.598 55 42 64.402 42 76V196C42 209.255 31.2548 220 18 220H4.41075e-06L5.61368e-07 76Z" fill="url(#paint1_linear_346_21)"/>
          <Path d="M199.5 122C211.374 122 221 131.626 221 143.5V143.5C221 155.374 211.374 165 199.5 165H56V146C56 132.745 66.7452 122 80 122H199.5Z" fill="url(#paint2_linear_346_21)"/>
          <Path d="M56 21C56 9.40202 65.402 0 77 0V0C88.598 0 98 9.40202 98 21V141C98 154.255 87.2548 165 74 165H56L56 21Z" fill="url(#paint3_linear_346_21)"/>
          <Path d="M108 24C108 10.7452 118.745 0 132 0H197C210.255 0 221 10.7452 221 24V89C221 102.255 210.255 113 197 113H132C118.745 113 108 102.255 108 89V24Z" fill="#FFD93D"/>
          <Defs>
            <LinearGradient id="paint0_linear_346_21" x1="28.8986" y1="220" x2="135.295" y2="134.812" gradientUnits="userSpaceOnUse">
              <Stop stopColor="white"/>
              <Stop offset="1" stopColor="#FFD93D"/>
            </LinearGradient>
            <LinearGradient id="paint1_linear_346_21" x1="28.8986" y1="220" x2="135.295" y2="134.812" gradientUnits="userSpaceOnUse">
              <Stop stopColor="white"/>
              <Stop offset="1" stopColor="#FFD93D"/>
            </LinearGradient>
            <LinearGradient id="paint2_linear_346_21" x1="28.8986" y1="220" x2="135.295" y2="134.812" gradientUnits="userSpaceOnUse">
              <Stop stopColor="white"/>
              <Stop offset="1" stopColor="#FFD93D"/>
            </LinearGradient>
            <LinearGradient id="paint3_linear_346_21" x1="28.8986" y1="220" x2="135.295" y2="134.812" gradientUnits="userSpaceOnUse">
              <Stop stopColor="white"/>
              <Stop offset="1" stopColor="#FFD93D"/>
            </LinearGradient>
          </Defs>
        </Svg>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>LITMUS</Text>
        <Text style={styles.description}>An Idea Sharing Platform Protected by Blockchain Technology</Text>
      </View>
      
      <View style={styles.btnContainer}>
        <Button title="GET STARTED"  color="#FFD93D"  onPress={() => router.push('/(tabs)/home')}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0a0a0a",
    padding: 20,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  textContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 8,
  },
  description: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    lineHeight: 24,
  },
  btn:{
    padding: 10,
    backgroundColor: "#FFD93D",
    borderRadius: 5,
    marginBottom: 0,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
  },
  btnContainer:{
    padding: 40,
  }
});

export const options = {
  headerShown: false,
};