/* @jsxImportSource react */
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

import { Colors } from '@/constants/theme'
import { useColorScheme } from '@/hooks/use-color-scheme'

export default function TabLayout() {
  const colorScheme = useColorScheme()

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarInactiveTintColor: Colors[colorScheme ?? 'light'].tabIconDefault,
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: colorScheme === 'dark' ? '#262626' : '#f5f5f5',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color, size }) => <Ionicons name="person" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="configurations"
        options={{
          title: 'Configurações',
          tabBarIcon: ({ color, size }) => <Ionicons name="settings" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="contractor-home"
        options={{ href: null }}
      />
    </Tabs>
  )
}
