import { FlatList, View } from "react-native";
import { useNavigation } from "expo-router";

import ScreenTitle from "@/components/ScreenTitle";
import Button from "@/components/Button";
import LoanProduct from "@/components/LoanProduct";
import { formatNumberWithCommas } from "@/utils/common";
import Spinner from "@/components/Spinner";
import { useLoanQuery } from "@/types/graphql";
import { Navigation } from "@/types/global";
import { styles } from "@/styles";

const defaultLoanProducts = [
  {
    id: 1,
    name: "Personal Loan",
    interestRate: 10,
    maximumAmount: 100000,
    loanTerm: 12,
  },
  {
    id: 2,
    name: "Home Loan",
    interestRate: 8,
    maximumAmount: 1000000,
    loanTerm: 24,
  },
];

const Index = () => {
  const navigation = useNavigation<Navigation>();

  const { data, loading } = useLoanQuery();

  const navigationHandler = () => {
    navigation.navigate("LoanApplication");
  };

  if (loading) {
    return <Spinner size="large" />;
  }

  const loanProducts = data?.loanProducts ?? defaultLoanProducts;

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
                maxLoanAmount={formatNumberWithCommas(item?.maximumAmount)}
                interestRate={item?.interestRate as number}
                active={!index}
              />
            </View>
          )}
          keyExtractor={(item) => item?.id}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button label="APPLY FOR A LOAN" onPress={navigationHandler} />
      </View>
    </View>
  );
};

export default Index;
