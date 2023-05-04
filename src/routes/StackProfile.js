import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../screens/profile/Profile';

const Stack = createNativeStackNavigator();

const StackProfile = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='profile' component={Profile} />
    </Stack.Navigator>
  );
};
export default StackProfile;