import { Alert, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import Header from '../../components/Router/header'
import FloatActionButton from '../../components/ui/floatActionButton'
import { SafeAreaView } from 'react-native-safe-area-context'
import { screenStyle } from '../../styles/screenStyle'
import { MockData } from '../../utils/mockData'
import MyNotesCard from '../../components/MyNotes'
import { ADDNOTE } from '../../utils/routes'
import { useNavigation } from '@react-navigation/native'
import Context from '../../context'

const MyNotes = () => {
    const navigator=useNavigation()
    const {deleteNote,deleteAll,notes}=useContext(Context)

  return (
    <SafeAreaView style={screenStyle.container}>
        <Header deleteAll={()=>deleteAll()}/>
        <FlatList
        data={notes}
        renderItem={({item}) => <MyNotesCard item={item} updateItem={(item)=>editNote(item.id)} deleteItem={(item)=>deleteNote(item.id) } /> }
        keyExtractor={item => item.id}
      />
        <FloatActionButton onPress={()=>navigator.navigate(ADDNOTE,{type:"Add"})} />
    </SafeAreaView>
  )
}

export default MyNotes

