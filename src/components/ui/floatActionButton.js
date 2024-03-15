import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Add } from 'iconsax-react-native';
import APPCOLOR from '../../theme/colors';

const FloatActionButton = (props) => {
  return (
    <TouchableOpacity {...props} style={styles.buttonStyle}>
      <Add size="40" color={APPCOLOR.WHITE}/>
    </TouchableOpacity>
  )
}

export default FloatActionButton;

const styles = StyleSheet.create({
    buttonStyle:{
        position:"absolute",
        bottom:60,
        right:30,
        width:70,
        height:70,
        borderRadius:50,
        backgroundColor:APPCOLOR.PRIMARY,
        justifyContent:"center",
        alignItems:"center"
    }
})