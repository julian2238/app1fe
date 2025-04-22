
import React, { useEffect } from 'react'
import { Redirect } from 'expo-router'
import useAuthStore from '../src/store/store';
import { ActivityIndicator, View } from 'react-native';
import SplashScreen from '../components/SplashScreen';

const AuthLayout = () => {

  const token = useAuthStore(state => state.token);
  const isLoading = useAuthStore(state => state.isLoading);
  const getTokenFromStorage = useAuthStore(state => state.getTokenFromStorage);

  useEffect(() => {
      getTokenFromStorage()
  }, [])
  
  if (isLoading) {
    return <SplashScreen />
  }

  
  if(token){
    return <Redirect href="/(app)/home" />
  }

  return <Redirect href="/login" />
}

export default AuthLayout