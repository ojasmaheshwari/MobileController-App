import React from "react";
import GamePresetItem, { PresetItemProps } from "./GamePresetItem";
import { View, Text } from "react-native";

const GamePresetsList = () => {
  const presets: PresetItemProps[] = [
    {
      image:
        "https://static.vecteezy.com/system/resources/previews/027/127/540/non_2x/grand-theft-auto-gta-v-logo-grand-theft-auto-gta-v-icon-transparent-free-png.png",
      caption: "GTA V",
    },
    {
      image:
        "https://pngimg.com/uploads/red_dead_redemption/red_dead_redemption_PNG20.png",
      caption: "RDR 2",
    },
    {
      image:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3f56fe3e-72c3-4400-a377-7b1216e9afec/dbcamf0-83ee210d-e6bd-4b46-828e-0e891ebb1dc8.png/v1/fill/w_512,h_512,strp/tekken_7_icon_by_cedry2kio_dbcamf0-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTEyIiwicGF0aCI6IlwvZlwvM2Y1NmZlM2UtNzJjMy00NDAwLWEzNzctN2IxMjE2ZTlhZmVjXC9kYmNhbWYwLTgzZWUyMTBkLWU2YmQtNGI0Ni04MjhlLTBlODkxZWJiMWRjOC5wbmciLCJ3aWR0aCI6Ijw9NTEyIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.aYTrvySblmqaTBLYDnZPDO2GEMtcTf3WEAWsMT2gKxs",
      caption: "Tekken 7",
    },
  ];

  return (
    <View className="text-white flex flex-col justify-center gap-2">
      <Text className="text-lg dark:text-white">Game Presets</Text>
      <View className="flex flex-row items-center gap-4">
        {presets.map((preset, idx) => (
          <GamePresetItem
            image={preset.image}
            caption={preset.caption}
            key={idx}
          />
        ))}
      </View>
    </View>
  );
};

export default GamePresetsList;
