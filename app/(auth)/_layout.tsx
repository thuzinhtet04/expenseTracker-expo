import { Redirect, Stack } from "expo-router";
import { Appearance } from "react-native";
import "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  const colorScheme = Appearance.getColorScheme();
  const conditin = false;

  if (conditin) return <Redirect href="/Home" />;
  return (
    <SafeAreaView className="flex-1">
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </SafeAreaView>
  );
}
