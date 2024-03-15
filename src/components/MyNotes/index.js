import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {useNavigation} from '@react-navigation/core';
import {ADDNOTE, NOTEDETAIL, NOTEEDIT} from '../../utils/routes';
import Context from '../../context';

const MyNotesCard = ({item,deleteItem,updateItem}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate(NOTEDETAIL, {item: item});
      }}>
      <View style={{maxWidth:"70%"}}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
    <View style={styles.buttonsContainer}>
    <TouchableOpacity onPress={()=>{deleteItem(item)}} >
        <Text style={{color:"red"}}>Delete</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{updateItem(item)}} >
        <Text style={{color:"blue"}}>Edit</Text>
      </TouchableOpacity>
    </View>
    </TouchableOpacity>
  );
};

export default MyNotesCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    gap: 6,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
  },
  date: {
    fontSize: 12,
  },
  buttonsContainer:{
    alignItems:"center",
    justifyContent:"center"
  }
});
