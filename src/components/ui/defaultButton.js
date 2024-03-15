import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import APPCOLOR from '../../theme/colors'
import { SCREEN_HEIGHT } from '../../utils/constants'
import { useNavigation } from '@react-navigation/native'
import { MYNOTES } from '../../utils/routes'

const DefaultButton = (props) => {
    const {text,children}=props;

    const navigation=useNavigation();
  return (
    <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate(MYNOTES,{text:text})}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  )
}

export default DefaultButton

const styles = StyleSheet.create({
    btncontainer: {
        backgroundColor: APPCOLOR.PRIMARY,
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
        width: "100%",
        position: "absolute",
        bottom: SCREEN_HEIGHT * 0.15
    },
    text: {
        color: "white"
    }
})