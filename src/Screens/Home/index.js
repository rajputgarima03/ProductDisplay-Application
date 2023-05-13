import React, { useContext, useState , useEffect} from "react";
import {View, Text, SafeAreaView,FlatList} from 'react-native'
import Title from "../../Components/Title";
import Categories from "../../Components/Categories";
import Card from "../../Components/Card";
import {CategoryContext, ProductsContext} from "../../../App"

const Home = () =>{
    const {products, setProducts} = useContext(ProductsContext)   
    const {category} = useContext(CategoryContext)
    const [selectedCategory, setSelectedCategory] = useState('smartphones')
    const [data, setData] = useState([])
  
    useEffect(()=>{
      setData(products)
    },[])
    useEffect(()=>{
        
          const filteredData = products?.filter((item)=>(
             (item.category?.includes(selectedCategory))
          ))
          setData(filteredData)
        },[selectedCategory])
    
   
    return(
        <SafeAreaView>
            <Title title={"Products"}/>
            <Categories categories={category} selectedCategory = {selectedCategory} onPressCategory = {setSelectedCategory}/>  
                   <FlatList
                   data = {data}
                   numColumns = {2}
                   showsVerticalScrollIndicator = {false}           
                   renderItem = {(item, index)=>(
                      <Card 
                      image={item.item.images[0]}
                      title= {item.item.title}
                      desc = {item.item.description}
                      price = {item.item.price}
                      />
                      
                   )}
                   />
        </SafeAreaView>
    )
}

export default Home