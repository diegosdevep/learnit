import { View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';
import { Icon } from 'react-native-elements';
import { styles } from './search.styles';
import { colors } from '../../constant/colors';

const Search = () => {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder='Buscar....' />
        <TouchableOpacity style={styles.btn}>
          <Icon
            type='material-community'
            name='magnify'
            size={30}
            color={colors.secondary}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Search;
