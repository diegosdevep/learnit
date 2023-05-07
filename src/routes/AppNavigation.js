import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home/Home';
import { iconOptions } from '../utils/iconsName';
import StackCategory from './StackCategory';
import StackFavorites from './StackFavorites';
import StackProfile from './StackProfile';
import { colors } from '../constant/colors';

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.secondary,
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      }}
    >
      <Tab.Screen
        name='homeTab'
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) =>
            focused ? iconOptions.home.focused : iconOptions.home.default,
        }}
      />
      <Tab.Screen
        name='categoryTab'
        component={StackCategory}
        options={{
          title: 'Categories',
          tabBarIcon: ({ focused }) =>
            focused
              ? iconOptions.category.focused
              : iconOptions.category.default,
        }}
      />
      <Tab.Screen
        name='favoritesTab'
        component={StackFavorites}
        options={{
          title: 'Favorites',
          tabBarIcon: ({ focused }) =>
            focused ? iconOptions.saved.focused : iconOptions.saved.default,
        }}
      />
      <Tab.Screen
        name='profileTab'
        component={StackProfile}
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) =>
            focused ? iconOptions.profile.focused : iconOptions.profile.default,
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigation;
