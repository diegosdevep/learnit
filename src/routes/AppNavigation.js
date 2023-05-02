import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home/Home';
import StackCategory from './StackCategory';

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='homeTab' component={Home} />
      <Tab.Screen
        name='categoryTab'
        component={StackCategory}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigation;
