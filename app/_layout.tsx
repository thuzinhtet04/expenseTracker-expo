import "react-native-reanimated";
import "../global.css";

import { Stack } from "expo-router";
import { Appearance } from "react-native";
import ThemeContextProvider from "../context/ThemeContext";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const colorScheme = Appearance.getColorScheme();

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
