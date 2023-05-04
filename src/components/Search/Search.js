import { View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';
import { Icon } from 'react-native-elements';
import { styles } from './search.styles';
import { colors } from '../../constant/colors';
import { useState } from 'react';

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Buscar....'
          value={searchTerm}
          onChangeText={(text) => {
            setSearchTerm(text);
            onSearch(text);
          }}
          onSubmitEditing={handleSearch}
        />
        <TouchableOpacity style={styles.btn} onPress={handleSearch}>
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
