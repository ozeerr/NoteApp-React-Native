import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../utils/constants'
import APPCOLOR from '../../theme/colors'
import ToolsPalette from '../../components/ui/toolsPalette'

const EditNoteScreen = ({route}) => {
    const {item,setItem}=route.params;
  


    const editHandler=()=>{
        
    }

  

    console.log(item)
    return (
        <View style={styles.container}>
         <ToolsPalette/>
          <View style={styles.contentWrapper}>
            <View>
            <TextInput
            style={{height: 40, borderBottomWidth:1,width:"100%",paddingHorizontal:20,borderBottomColor:"gray"}}
            onChangeText={(t)=>setItem({...item,title:t})}
          
           
            placeholder='Title here...'
            />
            </View>
            <View style={{height: "100%",padding:20}} >
            <TextInput
            onChangeText={(t)=>setItem({...item,content:t})}
            style={{width:"100%",}}
         
            placeholder='Description here...'
           />
            </View>
            <TouchableOpacity style={styles.btncontainer} onPress={editHandler}  >
              <Text style={styles.text}>Attach File</Text>
            </TouchableOpacity>
          </View>
          
        
        </View>
      )
    }
    
    export default EditNoteScreen
    
    const styles = StyleSheet.create({
       container:{
        padding:15,
        width:SCREEN_WIDTH,
        height:SCREEN_HEIGHT,
        alignItems:"center",
       },
       contentWrapper:{
        width:"100%",
        borderColor:APPCOLOR.GRAY,
        borderRadius:20,
        borderWidth:1,
        marginVertical:20,
        height:SCREEN_HEIGHT*0.7
       },
        btncontainer: {
            backgroundColor: APPCOLOR.PRIMARY,
            padding: 10,
            borderRadius: 5,
            alignItems: "center",
            width: "100%",
            position: "absolute",
            bottom: SCREEN_HEIGHT*0.0001
        },
        text: {
            color: "white"}
    })