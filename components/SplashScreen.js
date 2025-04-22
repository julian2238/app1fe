import { View, Text, ActivityIndicator } from 'react-native';

const SplashScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
      <ActivityIndicator size="large" color="#0000ff" />
      <Text>Cargando...</Text>
    </View>
  );
}

export default SplashScreen;