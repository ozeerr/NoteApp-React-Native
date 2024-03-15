import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import RootNavigator from './src/routes/RootNavigator'
import NoteProvider from './src/context/provider'

const App = () => {
  return (
    <NoteProvider>
    <NavigationContainer>
   <RootNavigator/>
    </NavigationContainer>
    </NoteProvider>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})