import 'react-native-gesture-handler'

import { Drawer } from 'expo-router/drawer'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
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
                headerShown: false,
            }}
        >
        </Drawer>
    </GestureHandlerRootView>
  )
}

export default DrawerLayout

