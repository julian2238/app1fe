
import React, { useEffect } from 'react'
import { Redirect } from 'expo-router'
import useAuthStore from '../src/store/store';
import { ActivityIndicator, View } from 'react-native';

const AuthLayout = () => {

  const token = useAuthStore(state => state.token);
  const isLoading = useAuthStore(state => state.isLoading);
  const getTokenFromStorage = useAuthStore(state => state.getTokenFromStorage);

  useEffect(() => {
    getTokenFromStorage()
  }, [])
  
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  
  if(token){
    return <Redirect href="/(app)/home" />
  }

  return <Redirect href="/login" />
}

export default AuthLayout