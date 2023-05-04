import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Category from '../screens/category/Category';
import Questions from '../screens/questions/Questions';
import Profile from '../screens/profile/Profile';

const Stack = createNativeStackNavigator();

const StackCategory = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='category' component={Category} />
      <Stack.Screen
        name='questions'
        component={Questions}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name='profile' component={Profile} />
    </Stack.Navigator>
  );
};

export default StackCategory;
