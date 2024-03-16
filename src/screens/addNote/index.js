import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import ToolsPalette from '../../components/ui/toolsPalette'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../utils/constants'
import APPCOLOR from '../../theme/colors'

import Context from '../../context'
import { MYNOTES } from '../../utils/routes'

const AddNote = ({route,navigation}) => {
  const {item,type}=route?.params
    const [title, setTitle] = useState(item?.title);
    const [description, setDescription] = useState(item?.description);
    const [check,setCheck]=useState(false)
    const {addNote,editNote}=useContext(Context)
  
var bugununTarihi = new Date();
var yil = bugununTarihi.getFullYear().toString()+"-";
var ay = "0"+(bugununTarihi.getMonth() + 1).toString()+"-";
var gun = bugununTarihi.getDate().toString();
    const saveNote=()=>{
      if(title==null||description==null){
        setCheck(true)
      }
      else{
       
        const form={
          title:title,
          description:description,
          date:yil+ay+gun,
          id:Math.floor(Math.random()*1000).toString()
        }
        addNote(form)
      }
    }

    const updateNote=()=>{
      const form={
        title:title,
        description:description,
        date:yil+ay+gun,
        id:item.id
      }
      editNote(item.id,form)
    }
   

  return (
    <View style={styles.container}>
      {check?<Text style={{fontWeight:"bold",padding:20,borderWidth:0.2,position:"absolute",top:10,zIndex:200,backgroundColor:"white"}}>Please fill in the relevant fields.</Text>:null}
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
        onChangeText={(t)=>setDescription(t)}
        value={description}
        placeholder='Description here...'
       />
        </View>
        <TouchableOpacity style={styles.btncontainer} onPress={type=="Update" ? updateNote : saveNote}   >
          <Text style={styles.text}>{type=="Add"?"Save":"Save Changes"}</Text>
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