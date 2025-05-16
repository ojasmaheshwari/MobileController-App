import { Platform, StyleSheet, TouchableOpacity } from "react-native";
import "../../global.css";
import GamePresetsList from "@/components/GamePresetsList";
import Instructions from "@/components/instructions";
import ConnectionOptionsList from "@/components/ConnectionOptionsList";
import { useState } from "react";
import { ScrollView } from "react-native";
import { View } from "react-native";
import { Text } from "react-native";
import { Button } from "react-native";
import { useSelectedMethod } from "@/contexts/selectedMethodContext";
import ScanButton from "@/components/ScanButton";
import LaunchGamePadButton from "@/components/LaunchGamePadButton";

export function ButtonMorePreset() {
  return (
    <TouchableOpacity className="p-2 bg-slate-600 mx-2 rounded-md w-48 text-white">
      <Text className="text-white">See More Presets</Text>
    </TouchableOpacity>
  );
}

export default function HomeScreen() {
  return (
    <ScrollView className="mx-2">
      <View>
        <Text className="text-slate-700 dark:text-white text-3xl text-center font-semibold p-4 mt-8">
          GameSpace
        </Text>
      </View>

      <View className="flex flex-col gap-1">
        <GamePresetsList />
        <ButtonMorePreset />
      </View>

      <ConnectionOptionsList />
      <Instructions />

      <View className="flex flex-row gap-4 w-full justify-center my-4">
        <ScanButton />
        <LaunchGamePadButton />
      </View>
    </ScrollView>
  );
}
