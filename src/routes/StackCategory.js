import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Category from '../screens/category/Category';
import Questions from '../screens/questions/Questions';
import { colors } from '../constant/colors';

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
    </Stack.Navigator>
  );
};

export default StackCategory;
