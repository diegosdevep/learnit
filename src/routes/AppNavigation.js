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
    <Tab.Navigator>
      <Tab.Screen
        name='homeTab'
        component={Home}
        options={{
          headerShown: false,
          title: 'Home',
          tabBarLabelStyle: { color: colors.secondary },
          tabBarIcon: ({ focused }) =>
            focused ? iconOptions.home.focused : iconOptions.home.default,
        }}
      />
      <Tab.Screen
        name='categoryTab'
        component={StackCategory}
        options={{
          headerShown: false,
          title: 'Categories',
          tabBarLabelStyle: { color: colors.secondary },
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
          headerShown: false,
          title: 'Favorites',
          tabBarLabelStyle: { color: colors.secondary },
          tabBarIcon: ({ focused }) =>
            focused ? iconOptions.saved.focused : iconOptions.saved.default,
        }}
      />
      <Tab.Screen
        name='profileTab'
        component={StackProfile}
        options={{
          headerShown: false,
          title: 'Profile',
          tabBarLabelStyle: { color: colors.secondary },
          tabBarIcon: ({ focused }) =>
            focused ? iconOptions.profile.focused : iconOptions.profile.default,
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigation;
