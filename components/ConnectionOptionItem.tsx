import { useSelectedMethod } from "@/contexts/selectedMethodContext";
import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";

export interface ConnectionItemProps {
  name: string;
  caption: string;
}

const ConnectionOptionItem: React.FC<ConnectionItemProps> = ({
  name,
  caption,
}) => {
  const { selectedMethod, setSelectedMethod } = useSelectedMethod();
  return (
    <ThemedView className="flex flex-col gap-1">
      <TouchableOpacity
        className={`w-24 h-24 rounded-md flex justify-center items-center ${
          selectedMethod === name ? "bg-pink-600" : "bg-slate-600"
        }`}
        onPress={() => setSelectedMethod(name)}
      >
        <Icon name={name} size={30} color={"white"}></Icon>
      </TouchableOpacity>
      <ThemedText className="block mx-auto text-sm dark:text-white">
        {caption}
      </ThemedText>
    </ThemedView>
  );
};

export default ConnectionOptionItem;
