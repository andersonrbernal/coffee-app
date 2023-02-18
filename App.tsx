import { SafeAreaView, StyleSheet, StatusBar, FlatList, ListRenderItem } from "react-native";
import CoffeeHeader from "./components/CoffeeHeader";
import CoffeeItem from "./components/CoffeeItem";
import SeparatorItem from "./components/SeparatorItem";
import { Coffee, coffeeList } from "./data/coffeeList";

const renderItem: ListRenderItem<Coffee> = ({ item }) => <CoffeeItem {...item} />

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={<CoffeeHeader />}
        ItemSeparatorComponent={SeparatorItem}
        keyExtractor={(item) => item.name}
        data={coffeeList}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: StatusBar.currentHeight,
    backgroundColor: '#fff',
  },
});
