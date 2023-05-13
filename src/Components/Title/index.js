import React from "react";
import {Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native"
import styles from './styles'
const Title = ({title, style}) =>{

    return(
          
       <View style = {styles.container}>
            <Text style = {[styles.text, style]}>{title}</Text>
       </View>
       
    )
}


export default Title