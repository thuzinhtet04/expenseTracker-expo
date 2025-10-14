import { Redirect, Stack } from "expo-router";
import { Appearance } from "react-native";
import "react-native-reanimated";

export default function RootLayout() {
  const colorScheme = Appearance.getColorScheme();
  const conditin = false;

  if (conditin) return <Redirect href="/Home" />;
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
