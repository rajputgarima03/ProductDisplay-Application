import React from "react";
import { StyleSheet } from "react-native";
import colors from "../../constants/Color";


const styles = StyleSheet.create({
   
    itemContainer : {
     alignItems : 'center',
     justifyContent : 'center',
     
    },
    selectedItemContainer : {
        backgroundColor : colors.green,
        borderRadius : 10,
        padding : 5,
        paddingHorizontal : 12
    },
    item : {
        fontSize : 15,
        fontWeight : 600,
        color : colors.lightGreen
    },
    selectedItem : {
         color : colors.white
    }
    
})

export default styles