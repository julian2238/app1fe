import { Tabs } from 'expo-router'
import { DrawerToggleButton } from '@react-navigation/drawer'
import Ionicons from "@expo/vector-icons/Ionicons";


const TabsLayout = () => {
  return (
    <Tabs screenOptions={{
                headerTitleStyle: { fontSize: 18 },
                headerTitleAlign: 'center',
                headerLeft: () => <DrawerToggleButton />
    }}>
      <Tabs.Screen 
        name='home'
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" size={size} color={color} />,
          tabBarLabel: 'Home',
          headerTitle: 'Home',
        }}
      />
      <Tabs.Screen 
        name='documents'
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="document-outline" size={size} color={color} />,
          tabBarLabel: 'Documents',
          headerTitle: 'Documents',

        }}   
      />
    </Tabs>
  )
}

export default TabsLayout