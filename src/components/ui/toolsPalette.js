import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  Smallcaps,
  Task,
  TextBold,
  TextUnderline,
  TextalignJustifycenter,
  TextalignLeft,
} from 'iconsax-react-native';
import APPCOLOR from '../../theme/colors';

const ToolsPalette = ({onChangeStyle}) => {
  const Buttons=[
    {
      id:1,
      name:"bold",
      icon:<TextBold size="32" color={APPCOLOR.SECONDARY} />
    },
    {
      id:2,
      name:"smallcaps",
      icon:<Smallcaps size="32" color={APPCOLOR.SECONDARY} />
    },
    {
      id:3,
      name:"underline",
      icon:<TextUnderline size="32" color={APPCOLOR.SECONDARY} />
    },
    {
      id:4,
      name:"alignleft",
      icon:<TextalignLeft size="32" color={APPCOLOR.SECONDARY} />
    },
    {
      id:5,
      name:"aligncenter",
      icon:<TextalignJustifycenter size="32" color={APPCOLOR.SECONDARY}/>
    },
    {
      id:6,
      name:"alignright",
      icon:<Task size="32" color={APPCOLOR.SECONDARY} />
    }
  ]
  return (
    <View style={styles.Buttonscontainer}>
      {Buttons.map((button)=>{
        return (
          <TouchableOpacity onPress={()=>onChangeStyle(button.name)} key={button.id} >
            {button.icon}
          </TouchableOpacity>
        )
      })}
    </View>
  );
};

export default ToolsPalette;

const styles = StyleSheet.create({
  Buttonscontainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: APPCOLOR.SCREENBACKGROUND,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
});
