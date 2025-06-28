import { View, Text } from 'react-native'
import React from 'react'

const Spacer = ({width = "100%", height = 40, ...props}) => {
  return (
    <View style={{width,height, ...props}} />
  )
}

export default Spacer