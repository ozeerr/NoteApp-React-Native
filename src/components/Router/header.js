import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useContext, useState } from 'react';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../utils/constants';
import {MYNOTES} from '../../utils/routes';
import { HambergerMenu, SearchNormal1, More } from 'iconsax-react-native';
import APPCOLOR from '../../theme/colors';
import Context from '../../context';

const Header = ({deleteAll}) => {
    const {visible,setVisible}=useContext(Context)
  return (
    <View style={styles.headerWrapper}>
      <View style={{alignItems:"center"}}>
        <Text style={styles.headerText}>{MYNOTES}</Text>
      </View>
      <View style={styles.iconWrapper}>
        <TouchableOpacity>
        <HambergerMenu size="32" color={APPCOLOR.SECONDARY}/>
        </TouchableOpacity>
        <View style={{flexDirection:"row", gap:10}}>
        <TouchableOpacity><SearchNormal1 size="32" color={APPCOLOR.SECONDARY}/></TouchableOpacity>
        <View style={{width:40,height:40}}>
        <TouchableOpacity onPress={()=>setVisible(!visible)}><More size="32" color={APPCOLOR.SECONDARY}/></TouchableOpacity>
        <TouchableOpacity onPress={deleteAll} style={[{width:120,height:40, backgroundColor:"white", position:"absolute",right:0,top:30,alignItems:"center",justifyContent:"center",borderWidth:0.2,borderRadius:10},!visible&&{display:"none"}]} ><Text style={{color:"red"}}>Delete All Notes</Text></TouchableOpacity>
        </View>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerWrapper: {
    height: SCREEN_HEIGHT * 0.15,
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    padding:10
  },
  headerText: {
    color:APPCOLOR.SECONDARY,
    fontSize: 30,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  iconWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
