import { View } from "react-native";

import ScreenTitle from "@/components/ScreenTitle";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ScreenTitle title="Apply for a loan" />
    </View>
  );
}
