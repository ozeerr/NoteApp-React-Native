import React, { useState } from 'react';
import Context from '.';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const NoteProvider=({children})=>{
    const [visible, setVisible] = useState(false);
    const navigation=useNavigation()
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
  
       
    
    ]);
    const addNote=(item)=>{
        if(item)
        setNotes([...notes,item])
    Alert.alert("Note Added")
    navigation.goBack()
      }
  
      const deleteNote=(id)=>{
        Alert.alert("Are you sure to delete your note?","",
        [
          {
            text:"Yes",
            onPress:()=>{
                if(id)
                { const newNotes=notes.filter((note)=>note.id!==id);
                 setNotes(newNotes);}
                 Alert.alert("Note Deleted")
            }
          },
          {
            text:"No"
          }
        ])
       
      }
  
      const editNote = (id,item) => {
        const newNotes = notes.map((note) => {
            return note.id === id ? { ...note, title:item.title, description:item.description } : note;
        });
        setNotes(newNotes);
        Alert.alert("Changes Saved.")
        navigation.goBack()

    }
  
    const deleteAll=()=>{
      Alert.alert("Are you sure to delete all notes?","",
      [
        {
          text:"Yes",
          onPress:()=>{setNotes([]),setVisible(false)}
        },
        {
          text:"No"
        }
      ])
    }
    return (
        <Context.Provider value={{notes,setNotes,deleteNote,addNote,editNote,deleteAll,visible,setVisible}}>
            {children}
        </Context.Provider>
    )
}

export  default NoteProvider;