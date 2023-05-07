import { StyleSheet } from 'react-native';
import { colors } from '../../constant/colors';

export const styles = StyleSheet.create({
  item: {
    width: '30%',
    borderRadius: 20,
    marginHorizontal: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 125,
    height: 150,
    borderRadius: 15,
    resizeMode: 'cover',
  },
  box: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
    borderTopWidth: 1,
    borderRadius: 1,
    overflow: 'hidden',
  },
  text: {
    color: colors.deepPurple,
    fontSize: 20,
    fontWeight: 'bold',
    textShadowColor: '#fff',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
});
