import logo from "@/assets/images/logo.png";
import { SignOutButton } from "@/components/SignOutButton";
import { SignedIn, SignedOut, useUser } from "@clerk/clerk-expo";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";
import React from "react";

import { Image, Text, TouchableOpacity, View } from "react-native";
const Home = () => {
  const { user } = useUser();
  return (
    <View className="w-full">
      <SignedIn>
        <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
        <SignOutButton />
      </SignedIn>
      <SignedOut>
        <Link href="/(auth)/sign-in">
          <Text>Sign in</Text>
        </Link>
        <Link href="/(auth)/sign-up">
          <Text>Sign up</Text>
        </Link>
      </SignedOut>
      <View className="">
        <Image
          style={{ width: 75, height: 75 }}
          source={logo}
          className="object-cover "
        />
        <View className="bg-red-500">
          <Text>Welcome</Text>
          <Text>Name of your account </Text>
        </View>
        <TouchableOpacity>+Add</TouchableOpacity>
        <TouchableOpacity className=" p-3 rounded-full bg-green-200 w-fit">
          <Ionicons name="exit-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <Text>home</Text>
    </View>
  );
};

export default Home;
