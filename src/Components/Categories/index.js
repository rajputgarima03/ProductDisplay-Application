import React from "react";
import {FlatList, Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native"

import styles from './styles'

const Categories = ({categories, selectedCategory, onPressCategory}) =>{
 
    return(
          
           <FlatList
                     data={categories}
                     horizontal
                     showsHorizontalScrollIndicator = {false}
                     renderItem = {({item, index})=>{
                        const selected = selectedCategory === item
                        return(
                                <TouchableOpacity 
                                style = {[styles.itemContainer, selected ? styles.selectedItemContainer : {}, index === 0 ? {} : {marginLeft: 20}]}
                                 onPress = {()=>(onPressCategory(item))}
                                >
                                     <Text style = {[styles.item, selected ? styles.selectedItem : {}]}>{item}</Text>
                                </TouchableOpacity>
                        )
                     }}
           />
       
    )
}


export default Categories