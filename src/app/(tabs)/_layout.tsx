import { Icon } from '@rneui/themed';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: COLORS }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => 
            <Icon name="home" type='font-awesome' color={color} />
        }}
      />
      <Tabs.Screen
        name="search/index"
        options={{
          title: 'Search',
        //   headerShown: false,
        //   tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
          tabBarIcon: ({ color }) =>  <Icon name="search" type='antdesign' color={color} />,
        }}
      />
      <Tabs.Screen
        name="library/index"
        options={{
          title: 'Library',
          tabBarIcon: ({ color }) =>  <Icon name="bars" type='font-awesome' color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) =>  <Icon name="user" type='font-awesome' color={color} />,
        }}
      />
    </Tabs>
  );
}
