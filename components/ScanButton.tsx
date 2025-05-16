import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const ScanButton = () => {
  return (
    <TouchableOpacity className="w-24 h-24 rounded-[50%] bg-slate-600 flex flex-row justify-center items-center flex flex-col justify-center items-center">
      <Icon name="scan1" size={28} color={"#fff"}></Icon>
      <Text className="dark:text-white text-sm my-1">Scan</Text>
    </TouchableOpacity>
  );
};

export default ScanButton;
