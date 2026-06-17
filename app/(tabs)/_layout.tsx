import { Tabs } from 'expo-router';
import { Platform } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#d4af37',
        tabBarInactiveTintColor: '#4a6fa5',
        tabBarStyle: {
          backgroundColor: '#0f1f3d',
          borderTopColor: '#1a3060',
          borderTopWidth: 1,
          ...Platform.select({
            ios: { position: 'absolute' },
            default: {},
          }),
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '700',
          letterSpacing: 1,
          textTransform: 'uppercase',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Normas',
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Diretrizes',
        }}
      />
    </Tabs>
  );
}
