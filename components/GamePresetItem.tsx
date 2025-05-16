import React from "react";
import { View, Text, Image } from "react-native";

export interface PresetItemProps {
  image: string;
  caption: string;
}

const GamePresetItem: React.FC<PresetItemProps> = ({ image, caption }) => {
  return (
    <>
      <View className="flex flex-col gap-1">
        <View className="w-24 h-24 rounded-md flex flex-row justify-center items-center">
          <Image
            source={{
              uri: `${image}`,
            }}
            alt={caption}
            className="w-full h-full rounded-md"
          />
        </View>
        <Text className="block mx-auto text-sm dark:text-white">{caption}</Text>
      </View>
    </>
  );
};

export default GamePresetItem;
