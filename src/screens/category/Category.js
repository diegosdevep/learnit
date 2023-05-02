import { FlatList, View, Text, SafeAreaView } from 'react-native';
import Item from '../../components/Item/Item';
import Search from '../../components/Search/Search';
import { categories } from '../../constant/categories';
import { styles } from './category.styles';

const Category = () => {
  const renderEmpty = () => (
    <View style={styles.empty}>
      <Text>No hay categorías disponibles</Text>
    </View>
  );

  const renderFooter = () => (
    <View style={styles.footer}>
      <Text style={styles.footerText}>Fin de la lista</Text>
    </View>
  );

  return (
    <SafeAreaView>
      <Search />
      <FlatList
        data={categories}
        renderItem={({ item }) => <Item category={item} />}
        keyExtractor={(item, index) => index.toString()}
        initialNumToRender={1}
        ListEmptyComponent={renderEmpty}
        ListFooterComponent={renderFooter}
        onEndReached={() => console.log('Fin de la lista alcanzado')}
        onEndReachedThreshold={0.5}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Category;
