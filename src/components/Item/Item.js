import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { styles } from './item.styles';

const Item = ({ category }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('questions', { categoryId: category.id })
        }
        style={styles.content}
        activeOpacity={0.7}
      >
        <Text style={styles.text}>{category.category}</Text>
        <Icon
          size={30}
          color='#FFF'
          name='chevron-right'
          type='material-community'
        />
      </TouchableOpacity>
    </View>
  );
};

export default Item;
