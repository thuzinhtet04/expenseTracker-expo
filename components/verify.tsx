import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

const Verify = ({onPress} : { onPress : () => {}}) => {
  return (
    <View className="  gap-3 justify-center  flex-1">
      <Text className="text-2xl font-bold text-center header-text">
        Verify your email
      </Text>
      <TextInput
        placeholder="Enter Verification Code"
        className="p-3 w-2/3 border rounded mx-auto"
      />
      <TouchableOpacity className="bg-primary text-xl text-primary_text p-3 text-center w-fit rounded border mx-auto">
        Verify Email
      </TouchableOpacity>
    </View>
  );
};

export default Verify;
