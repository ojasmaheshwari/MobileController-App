import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Text, TouchableOpacity, useColorScheme } from "react-native";
import Feather from "react-native-vector-icons/Feather";

export default function TabTwoScreen() {
  const colorScheme = useColorScheme();

  return (
    <>
      <ThemedView className="flex-1 bg-white dark:bg-black px-4 py-6">
        <ThemedText className="text-2xl font-bold text-gray-900 dark:text-white mb-6 mt-8 mx-auto text-3xl">
          Settings
        </ThemedText>

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
          <ThemedText className="text-lg font-medium text-gray-800 dark:text-gray-100">
            Help
          </ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </>
  );
}
