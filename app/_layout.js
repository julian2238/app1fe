import Toast from 'react-native-toast-message'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { toastConfig } from '../src/utils/toast'

const RootLayout = () => {
  return (
    <>
        <StatusBar style="auto" />
        <Stack screenOptions={{ headerShown: false }} />
        <Toast config={toastConfig}/>
    </>
  )
}

export default RootLayout