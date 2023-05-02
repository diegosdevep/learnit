import { StyleSheet } from 'react-native';
import { colors } from '../../constant/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: '3%',
    borderRadius: 10,
    backgroundColor: colors.secondary,
    marginVertical: 5,
    padding: 25,
  },
  text: {
    color: colors.lightGray,
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
});
