import { Stack } from "expo-router";
import { Appearance } from "react-native";
import "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  const colorScheme = Appearance.getColorScheme();

  return (
    <SafeAreaView>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </SafeAreaView>
  );
}
