import { FlatList, View } from "react-native";
import { useNavigation } from "expo-router";

import ScreenTitle from "@/components/ScreenTitle";
import Button from "@/components/Button";
import LoanProduct from "@/components/LoanProduct";
import { styles } from "@/styles";
import { formatNumberWithCommas } from "@/utils/common";

const Index = () => {
  const navigation = useNavigation();

  const navigationHandler = () => {
    navigation.navigate("loan-application" as never);
  };
  return (
    <View style={styles.container}>
      <View style={styles.screenTitle}>
        <ScreenTitle title="Loan Application Dashboard" />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={[1, 2, 3]}
          renderItem={({ item, index }) => (
            <View style={styles.loanProductContainer}>
              <LoanProduct
                maxLoanAmount={formatNumberWithCommas(500000)}
                interestRate={3}
                active={index === 0}
              />
            </View>
          )}
          keyExtractor={(item) => item.toString()}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button label="APPLY FOR A LOAN" onPress={navigationHandler} />
      </View>
    </View>
  );
};

export default Index;
