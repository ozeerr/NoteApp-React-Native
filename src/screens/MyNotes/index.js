import { Alert, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/Router/header'
import FloatActionButton from '../../components/ui/floatActionButton'
import { SafeAreaView } from 'react-native-safe-area-context'
import { screenStyle } from '../../styles/screenStyle'
import { MockData } from '../../utils/mockData'
import MyNotesCard from '../../components/MyNotes'
import { ADDNOTE } from '../../utils/routes'
import { useNavigation } from '@react-navigation/native'
const MyNotes = () => {
    const navigator=useNavigation()

    const [notes, setNotes] = useState([
      {
          id:1,
          title:"First Note",
          description:"This is the first note",
          date:"2021-09-01"
      },
      {
          id:2,
          title:"Second Note",
          description:"This is the second note",
          date:"2021-09-02"
      },
      {
          id:3,
          title:"Third Note",
          description:"This is the third note",
          date:"2021-09-03"
      },
      {
          id:4,
          title:"Fourth Note",
          description:"This is the fourth note",
          date:"2021-09-04"
      },
      {
          id:5,
          title:"Fifth Note",
          description:"This is the fifth note",
          date:"2021-09-05"
      },
      {
          id:6,
          title:"Sixth Note",
          description:"This is the sixth note",
          date:"2021-09-06"
      },
      {
          id:7,
          title:"Seventh Note",
          description:"This is the seventh note",
          date:"2021-09-07"
      },
      {
          id:8,
          title:"Eighth Note",
          description:"This is the eighth note",
          date:"2021-09-08"
      },
      {
          id:9,
          title:"Ninth Note",
          description:"This is the ninth note",
          date:"2021-09-09"
      },
      {
          id:10,
          title:"Tenth Note",
          description:"This is the tenth note",
          date:"2021-09-10"
      }
  
  ]);

  let lt1= {
    id:32,
    title:"asdas Note",
    description:"This is the sixth note",
    date:"2021-09-06"
}

    const addNote=(item)=>{
   
      if(item)
      setNotes([...notes,item])
    }

    const deleteNote=(id)=>{
      if(id)
     { const newNotes=notes.filter((note)=>note.id!==id);
      setNotes(newNotes);}
    }

    const editNote = (id) => {
      const newNotes = notes.map((note) => {
          return note.id === id ? { ...note, title: "DEĞİŞTİ" } : note;
      });
      setNotes(newNotes);
  }

  const deleteAll=()=>{
    Alert.alert("Are you sure to delete all notes?","",
    [
      {
        text:"Yes",
        onPress:()=>setNotes([])
      },
      {
        text:"No"
      }
    ])
  }
  

  return (
    <SafeAreaView style={screenStyle.container}>
        <Header deleteAll={()=>deleteAll()}/>
        <FlatList
        data={notes}
        renderItem={({item}) => <MyNotesCard item={item} updateItem={(item)=>editNote(item.id)} deleteItem={(item)=>deleteNote(item.id) } /> }
        keyExtractor={item => item.id}
      />
        <FloatActionButton onPress={()=>navigator.navigate(ADDNOTE)} />
    </SafeAreaView>
  )
}

export default MyNotes

