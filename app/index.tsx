import { View } from "react-native";
import { useNavigation } from "expo-router";

import ScreenTitle from "@/components/ScreenTitle";
import Button from "@/components/Button";

export default function Index() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ScreenTitle title="Apply for a loan" />
      <Button
        label="Learn More"
        onPress={() => {
          navigation.navigate("loan-application" as never);
        }}
      />
      <View style={{ marginTop: 16 }}></View>
    </View>
  );
}
