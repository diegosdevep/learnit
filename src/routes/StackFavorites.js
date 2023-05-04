import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Favorites from '../screens/favorites/Favorites';
import Profile from '../screens/profile/Profile';

const Stack = createNativeStackNavigator();

const StackFavorites = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='favorites' component={Favorites} />
    </Stack.Navigator>
  );
};
export default StackFavorites;
