import { StyleSheet } from 'react-native';
import { colors } from '../../constant/colors';

export const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 15,
    backgroundColor: 'transparent',
  },
  form: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.3,
    borderBottomColor: colors.secondary,
    padding: 8,
    borderRadius: 1,
    backgroundColor: '#e6e6e6',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 1 },
    elevation: 3,
  },
  input: {
    flex: 1,
    fontSize: 18,
    fontWeight: '600',
    color: colors.secondary,
    paddingVertical: 12,
    borderBottomColor: 'red',
  },
  btn: {
    borderRadius: 25,
    padding: 8,
    color: colors.secondary,
  },
});
