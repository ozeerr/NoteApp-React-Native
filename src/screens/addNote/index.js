import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import DefaultButton from '../../components/ui/defaultButton'
import ToolsPalette from '../../components/ui/toolsPalette'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../utils/constants'
import APPCOLOR from '../../theme/colors'
import { useNavigation } from '@react-navigation/native'
import { MYNOTES } from '../../utils/routes'
import Context from '../../context'

const AddNote = () => {

    const navigaton=useNavigation();
    const [title, setTitle] = useState();
    const [content, setContent] = useState();
   
  
    const handler=()=>{
      if(title!=="" && content!==""){
        setText(
          [ ...text,
           {
            title:title,
           content:content
          ,id:new Date().getTime().toString()}]
       )
       setTitle("");
        setContent("");
       navigaton.navigate(MYNOTES)
      }
      
    }

  return (
    <View style={styles.container}>
     <ToolsPalette/>
      <View style={styles.contentWrapper}>
        <View>
        <TextInput
        style={{height: 40, borderBottomWidth:1,width:"100%",paddingHorizontal:20,borderBottomColor:"gray"}}
        onChangeText={(txt)=>setTitle(txt)}
        value={title}
        placeholder='Title here...'
        />
        </View>
        <View style={{height: "100%",padding:20}} >
        <TextInput
        style={{width:"100%",}}
        onChangeText={(t)=>setContent(t)}
        value={content}
        placeholder='Description here...'
       />
        </View>
        <TouchableOpacity style={styles.btncontainer} onPress={handler} >
          <Text style={styles.text}>Attach File</Text>
        </TouchableOpacity>
      </View>
      
    
    </View>
  )
}

export default AddNote

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