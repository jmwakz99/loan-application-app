import { View } from "react-native";

import ScreenTitle from "@/components/ScreenTitle";
import Button from "@/components/Button";
import FormItem from "@/components/FormItem";

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
      <Button label="Learn More " />
      <View style={{ marginTop: 16 }}>
        <FormItem label="Full Name" placeholder="Full Name" />
      </View>
    </View>
  );
}
