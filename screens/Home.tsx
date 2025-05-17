import ConnectionOptionsList from "@/components/ConnectionOptionsList";
import GamePresetsList from "@/components/GamePresetsList";
import Instructions from "@/components/instructions";
import LaunchGamePadButton from "@/components/LaunchGamePadButton";
import ScanButton from "@/components/ScanButton";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Text, TouchableOpacity } from "react-native";

export function ButtonMorePreset() {
  return (
    <TouchableOpacity className="p-2 bg-slate-600 mx-2 rounded-md w-48 text-white">
      <Text className="text-white">See More Presets</Text>
    </TouchableOpacity>
  );
}

export function HomeScreen() {
  return (
    <ThemedView className="px-2">
      <ThemedView>
        <ThemedText className="text-slate-700 dark:text-white text-3xl text-center font-semibold p-4 mt-8">
          GameSpace
        </ThemedText>
      </ThemedView>

      <ThemedView className="flex flex-col gap-1">
        <GamePresetsList />
        <ButtonMorePreset />
      </ThemedView>

      <ConnectionOptionsList />
      <Instructions />

      <ThemedView className="flex flex-row gap-4 w-full justify-center py-4">
        <ScanButton />
        <LaunchGamePadButton />
      </ThemedView>
    </ThemedView>
  );
}
