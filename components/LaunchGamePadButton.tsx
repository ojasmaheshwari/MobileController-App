import React from "react";
import { Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const LaunchGamePadButton = () => {
  return (
    <TouchableOpacity className="w-24 h-24 rounded-[50%] bg-slate-600 flex flex-row justify-center items-center flex flex-col justify-center items-center">
      <Icon name="gamepad" size={28} color={"#fff"}></Icon>
      <Text className="dark:text-white text-sm my-1">Launch</Text>
    </TouchableOpacity>
  );
};

export default LaunchGamePadButton;
