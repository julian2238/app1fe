import { View, Text } from 'react-native'
import React from 'react'
import { Redirect, Stack } from 'expo-router'
import useAuthStore from '../store/store'

const AuthLayout = () => {

  const user = useAuthStore(state => state.user);
  
  if(user){
    return <Redirect href="/(app)" />
  }

  return <Redirect href="/login" />
}

export default AuthLayout