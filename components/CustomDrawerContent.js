import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { router } from 'expo-router';
import { colors } from '../src/utils/colors';
import useAuthStore from "../src/store/store";
import Ionicons from "@expo/vector-icons/Ionicons";

const CustomDrawerContent = (props) => {

    const { top, bottom } = useSafeAreaInsets();

    const logout = useAuthStore(state => state.logout);

    const handleLogout = () => {
        logout()
        router.replace('/login')
    }

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 20, }}>
                    <EvilIcons name="user" size={100} color={colors.primary} />
                    <View style={{ marginLeft: 10}}>
                        <Text style={{fontSize: 22, fontWeight: '500' }}>Alma Marcela Silva</Text>
                        <Text style={{fontSize: 16 }}>Alma@gmail.com</Text>
                    </View>
                </View>
                <View style={{ height: 1, backgroundColor: "#ccc", marginBottom: 20}} />
                <DrawerItem
                  icon={({ color, size }) => (
                    <Ionicons name="home-outline" size={size} color={color} />
                  )}
                  label={"Home"}
                  onPress={() => { router.push('/(app)/(tabs)/home') }}
                />
                <DrawerItem
                  icon={({ color, size }) => (
                    <Ionicons name="document-outline" size={size} color={color} />
                  )}
                  label={"Documents"}
                  onPress={() => { router.push('/(app)/(tabs)/documents') }}
                />
                <DrawerItem
                  icon={({ color, size }) => (
                    <Ionicons name="fast-food-outline" size={size} color={color} />
                  )}
                  label={"Menu"}
                  onPress={() => { router.push('/(app)/menu') }}
                />
                {/* <DrawerItemList {...props}/> */}
                <DrawerItem label={"Logout"} onPress={handleLogout} />
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

export default CustomDrawerContent;