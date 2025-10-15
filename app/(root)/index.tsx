import React from "react";
import { Image, Text, View } from "react-native";
import logo from "@/assets/images/logo.png"

const home = () => {
  return (
    <View>
      <View className="">
        <Image style={{ width: 20, height: 20 }} source={logo}  className='object-cover '/>
      </View>

      <Text>home</Text>
    </View>
  );
};

export default home;
