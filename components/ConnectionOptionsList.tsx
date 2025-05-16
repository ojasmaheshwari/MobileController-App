import React from "react";
import ConnectionOptionItem from "./ConnectionOptionItem";
import { ConnectionItemProps } from "./ConnectionOptionItem";
import { View, Text } from "react-native";

interface ConnectionListProps {}

export const instructionList: { [index: string]: string[] } = {
  bluetooth: [
    "Download client from here",
    "Run it on your PC",
    "Click on scan button in the app",
    "Choose your device",
    "Start gamepad",
  ],
  wifi: [
    "Download client from here",
    "Run it on your PC",
    "Click on scan button in the app",
    "Choose your device",
    "Start gamepad",
  ],
  usb: [
    "Download client from here",
    "Run it on your PC",
    "Click on scan button in the app",
    "Choose your device",
    "Start gamepad",
  ],
};

export const getInstructionList = (connectionMethod: string) => {
  if (instructionList.hasOwnProperty(connectionMethod)) {
    return instructionList[connectionMethod];
  } else {
    return ["Invalid instructions"];
  }
};

const ConnectionOptionsList: React.FC<ConnectionListProps> = () => {
  const options: ConnectionItemProps[] = [
    {
      name: "bluetooth",
      caption: "Bluetooth",
    },
    {
      name: "wifi",
      caption: "Local Network",
    },
    {
      name: "usb",
      caption: "USB",
    },
  ];

  return (
    <View className="text-white my-8 gap-1 flex flex-col">
      <Text className="text-lg dark:text-white">Connection Options</Text>
      <View className="flex flex-row items-center gap-4">
        {options.map((option, idx) => (
          <ConnectionOptionItem
            name={option.name}
            caption={option.caption}
            key={idx}
          />
        ))}
      </View>
    </View>
  );
};

export default ConnectionOptionsList;
