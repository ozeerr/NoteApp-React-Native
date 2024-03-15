import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {AttachCircle, Share, More} from 'iconsax-react-native';
import APPCOLOR from '../../theme/colors';

const HeaderRight = () => {
  return (
    <View style={styles.buttonsContainer}>
      <TouchableOpacity>
        <AttachCircle size="28" color={APPCOLOR.GRAY} variant="Linear" />
      </TouchableOpacity>
      <TouchableOpacity><Share size="28" color={APPCOLOR.GRAY} variant="Linear" /></TouchableOpacity>
      <TouchableOpacity><More size="28" color={APPCOLOR.GRAY} variant="Linear" /></TouchableOpacity>
    </View>
  );
};

export default HeaderRight;

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    gap: 10,
  },
});
