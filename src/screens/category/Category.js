import { useLayoutEffect, useState } from 'react';
import { FlatList, View, Text, SafeAreaView } from 'react-native';
import Item from '../../components/Item/Item';
import Search from '../../components/Search/Search';
import { categories } from '../../constant/categories';
import { colors } from '../../constant/colors';
import { styles } from './category.styles';
import { useNavigation } from '@react-navigation/native';

const Category = () => {
  const navigation = useNavigation();
  const [filteredCategories, setFilteredCategories] = useState(categories);

  const handleSearch = (searchTerm) => {
    if (searchTerm === '') {
      setFilteredCategories(categories);
    } else {
      const filtered = categories.filter((category) =>
        category.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCategories(filtered);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'Category',
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
      },
      headerStyle: {
        backgroundColor: colors.secondary,
        height: 110,
        borderBottomColor: 'transparent',
        shadowColor: 'transparent',
      },
    });
  }, []);
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
      <Search onSearch={handleSearch} />
      <FlatList
        data={filteredCategories}
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
