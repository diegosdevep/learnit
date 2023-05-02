import { StyleSheet } from 'react-native';
import { colors } from '../../constant/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    backgroundColor: 'white',
    marginHorizontal: '3%',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  fill: {
    flex: 1,
    color: colors.secondary,
    fontSize: 16,
    fontWeight: '700',
  },
  btn: {
    backgroundColor: colors.secondary,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    color: colors.secondary,
    fontSize: 16,
    marginRight: 5,
  },
  btnDelete: {
    backgroundColor: colors.dangerRed,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    color: colors.secondary,
    fontSize: 16,
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
  },
  iconBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
});
