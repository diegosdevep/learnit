import { colors } from '../constant/colors';
import {
  Entypo,
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Icon } from 'react-native-elements';

export const iconOptions = {
  home: {
    default: <AntDesign color={'grey'} size={24} name='home' />,
    focused: <Entypo color={colors.secondary} size={24} name='home' />,
  },
  category: {
    default: (
      <Icon
        type='material-community'
        color={'grey'}
        size={24}
        name='shape-outline'
      />
    ),
    focused: (
      <Icon
        type='material-community'
        color={colors.secondary}
        size={24}
        name='shape'
      />
    ),
  },

  saved: {
    default: <MaterialIcons color={'grey'} size={24} name='favorite-border' />,
    focused: (
      <MaterialIcons color={colors.secondary} size={24} name='favorite' />
    ),
  },
  profile: {
    default: <Ionicons color={'grey'} size={24} name='person-outline' />,
    focused: <Ionicons color={colors.secondary} size={24} name='person' />,
  },
};
