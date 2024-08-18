import { FlatList, View } from "react-native";
import { useNavigation } from "expo-router";

import ScreenTitle from "@/components/ScreenTitle";
import Button from "@/components/Button";
import LoanProduct from "@/components/LoanProduct";
import { styles } from "@/styles";
import { formatNumberWithCommas } from "@/utils/common";
import Spinner from "@/components/Spinner";
import { useLoanQuery } from "@/types/graphql";

const Index = () => {
  const { data, loading } = useLoanQuery();

  const navigation = useNavigation();

  const navigationHandler = () => {
    navigation.navigate("loan-application" as never);
  };

  if (loading) {
    return <Spinner size="large" />;
  }

  const loanProducts = data?.loanProducts;

  return (
    <View style={styles.container}>
      <View style={styles.screenTitle}>
        <ScreenTitle title="Loan Application Dashboard" />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={loanProducts as any}
          renderItem={({ item, index }) => (
            <View style={styles.loanProductContainer}>
              <LoanProduct
                name={item.name}
                maxLoanAmount={formatNumberWithCommas(item?.maximumAmount ?? 0)}
                interestRate={item?.interestRate as number}
                active={index === 0}
              />
            </View>
          )}
          keyExtractor={(item: LoanProduct) => item?.id?.toString() ?? ""}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button label="APPLY FOR A LOAN" onPress={navigationHandler} />
      </View>
    </View>
  );
};

export default Index;
