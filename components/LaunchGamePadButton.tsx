import { RootStackParamList } from "@/app/(tabs)";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "expo-router";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

const LaunchGamePadButton = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handlePress = () => {
    navigation.push("Gamepad");
  };

  return (
    <TouchableOpacity
      className="w-24 h-24 rounded-[50%] bg-slate-600 flex flex-row justify-center items-center flex flex-col justify-center items-center"
      onPress={handlePress}
    >
      <Icon name="gamepad" size={28} color={"#fff"}></Icon>
      <Text className="dark:text-white text-sm my-1">Launch</Text>
    </TouchableOpacity>
  );
};

export default LaunchGamePadButton;
