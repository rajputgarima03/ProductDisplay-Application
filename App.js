import React, { useState, useEffect } from "react";
import Home from './src/Screens/Home'


export const ProductsContext =  React.createContext();
export const CategoryContext =  React.createContext();
const App = () =>{
    const [products, setProducts] = useState([])
    const [category, setCategory] = useState([])

    const fetchCategory = (products) =>{
     
      
        const res =  [... new Set(products.map((item)=> item.category))]
    
        return res
      }
   
           useEffect (()=>{
                            (async()=>{
                                 await handleProductsFetch()
                           
                               
                            })();
                    }, [])
                   
     
    const  handleProductsFetch = async () =>
       {
            fetch('https://dummyjson.com/products?limit=25')
            .then(response => response.json()) 
            .then(data => {
                // Handle the fetched data here
              
            
                setProducts(data.products);
                setCategory(fetchCategory(data.products))
            })
            .catch(error => {
                // Handle any errors that occurred during the fetch
                console.error(error);
            });
                
       
       }
    return (
        <ProductsContext.Provider value={{products, setProducts}}>
         <CategoryContext.Provider value={{category}}>
         <Home/>
         </CategoryContext.Provider>
               
          
        </ProductsContext.Provider>
       
    )
}

export default App