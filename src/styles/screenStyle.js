import { StyleSheet } from "react-native";
import APPCOLOR from "../theme/colors";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../utils/constants";

const screenStyle=StyleSheet.create({
    container:{
        backgroundColor:APPCOLOR.SCREENBACKGROUND,
        width:SCREEN_WIDTH,
        height:SCREEN_HEIGHT,
    }
});

export {screenStyle}