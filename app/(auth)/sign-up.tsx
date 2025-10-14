import signUpImage from "@/assets/images/revenue-i1.png";
import { Link, Stack } from "expo-router";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const SignUpPage = () => {
  return (
    <SafeAreaView className=" flex-1">

      <View className=" flex-grow ">
        <View className=" items-center justify-center ">
          <Image
            source={signUpImage}
            style={{ width: 300, height: 300 }}
            className="mx-auto mt-10"
          />
        </View>
        <View className="flex flex-col gap-2">
          <TextInput
            placeholder="Enter email"
            className="p-2 border rounded w-2/3 mx-auto"
          />
          <TextInput
            placeholder="Enter password"
            className="p-2 border rounded w-2/3 mx-auto"
          />
        </View>
        <TouchableOpacity className="bg-primary mt-2 p-2 rounded mx-auto w-2/3 text-center text-primary_text">
          Sign up
        </TouchableOpacity>
        <Text className="text-center mt-2">
          Already have an account?{" "}
          <Link href="/sign-in" className="link">
            Sign In
          </Link>{" "}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignUpPage;
