import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../constant/colors';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  category: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 20,
    color: colors.secondary,
    marginVertical: 20,
    marginLeft: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
  divider: {
    borderWidth: 0.3,
    borderColor: 'gray',
    marginBottom: 20,
    opacity: 0.5,
  },
  img: {
    width: width - 35,
    height: 240,
    alignSelf: 'center',
  },
  title: {
    fontSize: 40,
    color: colors.lightGray,
    fontWeight: 'bold',
    marginTop: 150,
    textAlign: 'center',
    textShadowColor: 'black',
    textShadowOffset: { width: 4, height: 4 },
    textShadowRadius: 6,
  },
  recommendation: {
    width: width - 35,
    height: 120,
    alignSelf: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  text: {
    marginLeft: 18,
    fontSize: 17,
    fontWeight: 600,
    marginBottom: 5,
    color: colors.secondary,
  },
});
