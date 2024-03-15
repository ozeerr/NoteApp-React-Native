import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ToolsPalette from '../../components/ui/toolsPalette';

const NoteDetail = ({route}) => {
    const {item}=route.params;
    const [style, setStyle] = useState();
const StyleHandler=(name)=>{
  if(name==="bold") setStyle(styles.bold);
  if(name==="smallcaps") setStyle(styles.smallcaps);
  if(name==="underline") setStyle(styles.underline);
  if(name==="alignleft") setStyle(styles.alignleft);
  if(name==="aligncenter") setStyle(styles.aligncenter);
  if(name==="alignright") setStyle(styles.alignright);
}

  return (
  <View style={{flex:1}}>
    <ToolsPalette onChangeStyle={(name)=>StyleHandler(name)}/>
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.date}>{item.date}</Text>
      <Text style={[styles.description,style]}>{item.description}</Text>
    </View>
  </View>
  )
}

export default NoteDetail

const styles = StyleSheet.create({
  container:{
    margin:20,
    flex:1,
    padding:10,
    border:"solid",
    borderWidth:0.2,
    borderRadius:30
  },
  title:{
    fontSize:25,
    fontWeight:"bold",
  paddingTop:10,
paddingLeft:10},

  description:{
    fontSize:16,
    padding:10
  },
  date:{
    fontSize:12,
    padding:10
  },
  bold:{
    fontWeight:"bold"
  },
  underline:{
    textDecorationLine:"underline"
  },
  smallcaps:{
    fontVariant:["small-caps"]
  },
  alignleft:{
    textAlign:"left"
  },
  aligncenter:{
    textAlign:"center"
  },
  alignright:{
    textAlign:"right"
  } 
})