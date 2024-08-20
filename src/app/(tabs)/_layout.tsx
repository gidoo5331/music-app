import { COLORS } from '@/constants/tokens'
import { FontAwesome } from '@expo/vector-icons'
import { Tabs } from 'expo-router'

export default function TabLayout() {
	return (
		<Tabs screenOptions={{ tabBarActiveTintColor: COLORS.primary[100] }}>
			<Tabs.Screen
				name="index"
				options={{
					title: 'Home',
					tabBarIcon: ({ color }) => (
						<FontAwesome name="home" size={20} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="search/index"
				options={{
					title: 'Search',
					//   headerShown: false,
					tabBarIcon: ({ color }) => (
						<FontAwesome name="search" size={20} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="library/index"
				options={{
					title: 'Library',
					tabBarIcon: ({ color }) => (
						<FontAwesome name="bars" size={20} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="profile/index"
				options={{
					title: 'Profile',
					tabBarIcon: ({ color }) => (
						<FontAwesome name="user" size={20} color={color} />
					),
				}}
			/>
		</Tabs>
	)
}
