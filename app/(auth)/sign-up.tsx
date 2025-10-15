import signUpImage from "@/assets/images/revenue-i1.png";
import Verify from "@/components/verify";
import { useSignUp } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";
import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const SignUpPage = () => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [pendingVerification, setPendingVerification] = React.useState(false);
  const [code, setCode] = React.useState("");

  // Handle submission of sign-up form
  const onSignUpPress = async () => {
    if (!isLoaded) return;

    // Start sign-up process using email and password provided
    try {
      await signUp.create({
        emailAddress,
        password,
      });

      // Send user an email with verification code
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      // Set 'pendingVerification' to true to display second form
      // and capture OTP code
      setPendingVerification(true);
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
    }
  };

  // Handle submission of verification form
  const onVerifyPress = async () => {
    if (!isLoaded) return;

    try {
      // Use the code the user provided to attempt verification
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code,
      });

      // If verification was completed, set the session to active
      // and redirect the user
      if (signUpAttempt.status === "complete") {
        await setActive({ session: signUpAttempt.createdSessionId });
        router.replace("/");
      } else {
        // If the status is not complete, check why. User may need to
        // complete further steps.
        console.error(JSON.stringify(signUpAttempt, null, 2));
      }
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
    }
  };
  if (pendingVerification) {
    return <Verify onPress={onVerifyPress} />;
  }
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
            autoCapitalize="none"
            value={emailAddress}
            placeholder="Enter email"
            onChangeText={(email) => setEmailAddress(email)}
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
        <TouchableOpacity onPress={onSignUpPress} className="bg-primary mt-2 p-2 rounded mx-auto w-2/3 text-center text-primary_text">
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
