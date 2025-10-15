import { ClerkProvider } from "@clerk/clerk-expo";
import { Slot } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import "react-native-reanimated";
import "../global.css";

const CLERK_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

// Custom token cache (optional but recommended)
const expoTokenCache = {
  getToken: () => SecureStore.getItemAsync("clerk_token"),
  saveToken: (value) => SecureStore.setItemAsync("clerk_token", value),
};

export default function RootLayout() {
  return (
    <ClerkProvider
      publishableKey={CLERK_PUBLISHABLE_KEY}
      tokenCache={expoTokenCache}
    >
      <Slot />
    </ClerkProvider>
  );
}
