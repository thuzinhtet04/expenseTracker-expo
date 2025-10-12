import { Image, Text, View } from "react-native";
import logo from "@/assets/images/logo.png";
const SignUpPage = () => {
  return (
    <View>
      <Image source={logo} style={{ width: 300, height: 300 }} />
      <Text>SignUpPage</Text>
    </View>
  );
};

export default SignUpPage;
