import "react-native-reanimated";

import { Stack } from "expo-router";
import { Appearance } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const colorScheme = Appearance.getColorScheme();

  return (
    <SafeAreaView style={{}}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </SafeAreaView>
  );
}
