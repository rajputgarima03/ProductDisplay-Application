import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import colors from "../../constants/Color";

const {width, height} = Dimensions.get("window");

const styles = StyleSheet.create({
  container : {
      
        borderRadius : 12,
        backgroundColor : 'rgba(217, 217, 217, 0.5)',
        padding : 10,
        width : width * 0.4,
        marginVertical : 60,
        height : width * 0.45,
        marginRight : 10,
        marginLeft : 20
       

   },
   col : {
        flexDirection : 'column',
        alignItems : 'center',
        
   },
   Price:{
    flexDirection : 'row',
    justifyContent :'space-between'
   },
   title : {
        fontSize : 14,
        fontWeight : '600',
        color : colors.black,
        marginTop : 11,
        alignSelf : 'center',
        
   },
   footerText : {
        fontSize : 11,
        fontWeight : '400',
        color : colors.lightGrey2,
        marginTop : 10
   },
   footerDesc : {
     fontSize : 11,
     fontWeight : '600',
     color : colors.grey,
     marginTop : 5
    },
    image : {
      height : 110,
      width : 110,
      borderRadius : 80,
      marginTop : -60,
     alignSelf : 'center'
    }
})

export default styles