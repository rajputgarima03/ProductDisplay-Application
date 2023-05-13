import React from "react";
import {Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native"
import styles from './styles'

const Card = ({title, image,desc,price}) =>{
 
    return(
          
       <View style = {styles.container}>
             <View style = {styles.col}> 
              <Image style = {styles.image} source={{uri : image }}/>
              <Text  style = {[styles.title ]}  numberOfLines={1}>{title}</Text>       

             </View>
                                       
                        <Text style = {styles.footerText}>Description</Text>                 
                        <Text style = {styles.footerDesc} numberOfLines={2}>{desc}</Text>          
                        <View style = {styles.Price}>
                          <Text style = {styles.footerText}>Price</Text>
                          <Text style = {[styles.footerText]}>${price}</Text>
                        </View>
            
       </View>
       
    )
}


export default Card