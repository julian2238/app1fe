import 'react-native-gesture-handler'

import { Drawer } from 'expo-router/drawer'  
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Ionicons from '@expo/vector-icons/Ionicons';
// import CustomDrawerContent from '../components/CustomDrawerContent';

import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { Text, View } from "react-native";
import Colors from "../../utils/Colors";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import EvilIcons from '@expo/vector-icons/EvilIcons';

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

function CustomDrawerContent(props) {

    const { top, bottom } = useSafeAreaInsets();

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 20, }}>
                    {/* <Avatar name="Alma Marcela Silva" backgroundColor={Colors.primary} /> */}
                    <EvilIcons name="user" size={100} color={Colors.primary} />
                    <View style={{ marginLeft: 10}}>
                        <Text style={{fontSize: 22, fontWeight: '500' }}>Alma Marcela Silva</Text>
                        <Text style={{fontSize: 16 }}>Alma@gmail.com</Text>
                    </View>
                </View>
                <View style={{ height: 1, backgroundColor: "#ccc", marginBottom: 20}} />
                <DrawerItemList {...props}/>
                <DrawerItem label={"Logout"} onPress={() => {}} />
            </DrawerContentScrollView>
        </View>
    )
}

const Avatar = ({ name, size = 70, backgroundColor = '#3498db', textColor = '#fff' }) => {
    // Función para obtener las iniciales
    const getInitials = (name) => {
      if (!name) return '';
      const words = name.split(' ');
      return words.map(word => word[0]).join('').toUpperCase().slice(0, 2);
    };
  
    return (
      <View style={{ 
        width: size, 
        height: size, 
        borderRadius: size / 2, 
        backgroundColor, 
        justifyContent: 'center', 
        alignItems: 'center',
      }}>      
        <Text style={{ 
          color: textColor, 
          fontSize: size / 2.5, 
          fontWeight: 'bold' 
        }}>{getInitials(name)}</Text>
      </View>
    );
};

export default DrawerLayout

