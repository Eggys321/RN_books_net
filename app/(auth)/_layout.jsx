import { Stack } from 'expo-router'
// import {  } from 'expo-status-bar'
import { StatusBar } from 'react-native'

const AuthLayout = () => {
  return (
    <>
    <StatusBar style='auto'/>
    <Stack screenOptions={{headerShown:false,animation:"none"}}/>
    </>
  )
}

export default AuthLayout