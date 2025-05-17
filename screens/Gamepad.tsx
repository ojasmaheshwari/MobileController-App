import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import * as ScreenOrientation from "expo-screen-orientation";
import { useEffect } from "react";

export function GamepadScreen() {
  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);

    return () => {
      ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT_UP
      );
    };
  }, []);
  return (
    <ThemedView>
      <ThemedText>Hello world</ThemedText>
    </ThemedView>
  );
}
