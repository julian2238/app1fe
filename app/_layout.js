import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { View, Text } from 'react-native'

const RootLayout = () => {
  return (
    <>
        <StatusBar style="auto" />
        <Stack 
        screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="index" />
            <Stack.Screen name="login" />
            <Stack.Screen name="(app)" />
        </Stack>
    </>
  )
}

export default RootLayout