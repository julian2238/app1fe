import 'react-native-gesture-handler'

import { Drawer } from 'expo-router/drawer'  
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Ionicons from '@expo/vector-icons/Ionicons';
import CustomDrawerContent from '../../components/CustomDrawerContent';

const DrawerLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer 
            drawerContent={CustomDrawerContent} 
            screenOptions={{
                drawerActiveBackgroundColor: '#2C3E50',
                drawerActiveTintColor: "#fff",
                drawerItemStyle: { borderRadius: 12, marginVertical: 2 },
                drawerLabelStyle: { fontSize: 16 },
                headerTitleStyle: { fontSize: 18 },
                headerTitleAlign: 'center',
        
            }}>
            <Drawer.Screen 
                name="home" 
                options={{
                    drawerLabel: 'Home',
                    headerTitle: 'Home',
                    drawerIcon: ({ size, color }) => (
                        <Ionicons name="home-outline" size={size} color={color} />
                    ),

                }}
            />
            <Drawer.Screen 
                name="menu" 
                options={{
                    drawerLabel: 'Menu',
                    headerTitle: 'Menu',
                    drawerIcon: ({ size, color }) => (
                        <Ionicons name="fast-food-outline" size={size} color={color} />
                    ),

                }}
            />
            <Drawer.Screen 
                name="documents" 
                options={{
                    drawerLabel: 'Documents',
                    headerTitle: 'Documents',
                    drawerIcon: ({ size, color }) => (
                        <Ionicons name="document-outline" size={size} color={color} />
                    )
                }}
            />
        </Drawer>
    </GestureHandlerRootView>
  )
}

export default DrawerLayout

