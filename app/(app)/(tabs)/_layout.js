// app/_layout.js
import { Tabs } from 'expo-router'
import { DrawerToggleButton } from '@react-navigation/drawer'
import Ionicons from "@expo/vector-icons/Ionicons"
import { Platform } from 'react-native'

const screenIcon = {
  home: 'home-outline',
  documents: 'document-outline',
  courses: 'school-outline',
  news: 'newspaper-outline',
}

const createTabScreenOptions = (routeName, label, headerTitle) => ({
  tabBarIcon: ({ color, size }) => (
    <Ionicons name={screenIcon[routeName]} size={size} color={color} />
  ),
  tabBarLabel: label,
  headerTitle,
})

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerTitleStyle: { fontSize: 18 },
        headerTitleAlign: 'center',
        headerLeft: () => <DrawerToggleButton />,
        tabBarActiveTintColor: '#007aff',
        tabBarInactiveTintColor: '#8e8e93',
        tabBarStyle: {
          position: 'absolute',
          bottom: 10,
          margin: 8,
          left: 20,
          right: 20,
          backgroundColor: '#f9f9f9',
          borderRadius: 20,
          height: 60,
          paddingBottom: Platform.OS === 'ios' ? 10 : 5,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowRadius: 10,
          shadowOffset: { width: 0, height: 4 },
          elevation: 5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}
    >
      <Tabs.Screen name="home" options={createTabScreenOptions('home', 'Home', 'Home')} />
      <Tabs.Screen name="documents" options={createTabScreenOptions('documents', 'Documents', 'Documents')} />
      <Tabs.Screen name="courses" options={createTabScreenOptions('courses', 'Courses', 'Courses')} />
      <Tabs.Screen name="news" options={createTabScreenOptions('news', 'News', 'Latest News')} />
    </Tabs>
  )
}

export default TabsLayout
