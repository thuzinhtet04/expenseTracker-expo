import signInImage from "@/assets/images/revenue-i4.png";
import { useSignIn } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";
import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const SignUpPage = () => {
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");

  // Handle the submission of the sign-in form
  const onSignInPress = async () => {
    if (!isLoaded) return;

    // Start the sign-in process using the email and password provided
    try {
      const signInAttempt = await signIn.create({
        identifier: emailAddress,
        password,
      });

      // If sign-in process is complete, set the created session as active
      // and redirect the user
      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace("/");
      } else {
        // If the status isn't complete, check why. User might need to
        // complete further steps.
        console.error(JSON.stringify(signInAttempt, null, 2));
      }
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
    }
  };
  return (
    <SafeAreaView className=" flex-1">
      <View className=" flex-grow ">
        <View className=" items-center justify-center ">
          <Image
            source={signInImage}
            style={{ width: 300, height: 300 }}
            className="mx-auto mt-10"
          />
        </View>
        <View className="flex flex-col gap-2">
          <TextInput
            autoCapitalize="none"
            value={emailAddress}
            placeholder="Enter email"
            onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
            className="p-2 border rounded w-2/3 mx-auto"
          />
          <TextInput
            value={password}
            placeholder="Enter password"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
            className="p-2 border rounded w-2/3 mx-auto"
          />
        </View>
        <TouchableOpacity
          onPress={onSignInPress}
          className="bg-primary mt-2 p-2 rounded mx-auto w-2/3 text-center text-primary_text"
        >
          Sign In
        </TouchableOpacity>
        <Text className="text-center mt-2">
          Don&apos;t have an account?{" "}
          <Link href="/sign-in" className="link">
            Sign Up
          </Link>{" "}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignUpPage;
