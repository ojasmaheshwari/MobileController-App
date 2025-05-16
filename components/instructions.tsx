import { useSelectedMethod } from "@/contexts/selectedMethodContext";
import React from "react";
import { View, Text } from "react-native";
import { getInstructionList } from "./ConnectionOptionsList";

interface InstructionsProps {}

const getName = (method: string) => {
  if (method == "bluetooth") {
    return "Bluetooth";
  } else if (method == "wifi") {
    return "Wifi";
  } else if (method == "usb") {
    return "USB";
  }
};

const Instructions: React.FC<InstructionsProps> = () => {
  const { selectedMethod } = useSelectedMethod();
  const lists = getInstructionList(selectedMethod);

  return (
    <View className="py-4">
      <Text className="text-lg dark:text-white">
        {getName(selectedMethod)} Instructions
      </Text>
      <View className="list-decimal list-inside">
        {lists.length !== 0 ? (
          lists.map((item, idx) => (
            <Text key={idx} className="dark:text-white">
              {idx + 1}. {item}
            </Text>
          ))
        ) : (
          <Text>No Instructions</Text>
        )}
      </View>
    </View>
  );
};

export default Instructions;
