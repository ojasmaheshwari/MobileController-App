import { Image } from "expo-image";
import { Platform, StyleSheet, useColorScheme } from "react-native";
import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Text } from "react-native";
import { View, TouchableOpacity } from "react-native";
import Feather from "react-native-vector-icons/Feather";

export default function TabTwoScreen() {
  const colorScheme = useColorScheme();

  return (
    <>
      <View className="flex-1 bg-white dark:bg-black px-4 py-6">
        <Text className="text-2xl font-bold text-gray-900 dark:text-white mb-6 mt-8 mx-auto text-3xl">
          Settings
        </Text>

        <TouchableOpacity
          className="flex-row items-center bg-gray-100 dark:bg-gray-800 rounded-2xl px-4 py-5 mb-4"
          onPress={() => {}}
        >
          <Feather
            name="layout"
            size={22}
            color={colorScheme === "light" ? "#000" : "#fff"}
            className="mr-4 text-gray-800 dark:text-gray-100"
          />
          <Text className="text-lg font-medium text-gray-800 dark:text-gray-100">
            Configure Layout
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="flex-row items-center bg-gray-100 dark:bg-gray-800 rounded-2xl px-4 py-5"
          onPress={() => {}}
        >
          <Feather
            name="help-circle"
            size={22}
            color={colorScheme === "light" ? "#000" : "#fff"}
            className="mr-4 text-gray-800 dark:text-gray-100"
          />
          <Text className="text-lg font-medium text-gray-800 dark:text-gray-100">
            Help
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
