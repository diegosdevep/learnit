import { StyleSheet } from 'react-native';
import { colors } from '../../constant/colors';

export const styles = StyleSheet.create({
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    height: 50,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: colors.dangerRed,
  },
});
