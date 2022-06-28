import React, { useState, useEffect } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import axios from "axios";

export default function ProductList() {
    const  { user } = useAuthContext()
    const [products, setProducts] = useState([]);
    const [orderData, setOrderData] = useState([]);
  
    useEffect(() => {
      axios.get(`https://cardgametestserver.azurewebsites.net/product`).then((res) => {
        const responseProducts = res.data;
        setProducts(responseProducts);
      });
    }, []);
  
    console.log(products); 

    const handleClick = async () => {
        const {orderData} = await axios.post(
          'https://cardgametestserver.azurewebsites.net/order',
          {
            userId: user.uid,
          }
        )
      setOrderData(orderData)
    }

    

    return (
     <div>
      <h1 className="text-black dark:text-white text-2xl">Shop Tries</h1>
      {products &&
        products.map((product) => {
          const { productId, productName, productDescription, productPrice} = product;
          return (
            <div key={productId}>
              <div className="bg-white dark:bg-gray-700 shadow-md rounded px-8 pt-1 pb-4 mb-2">
                <div className="flex flex-wrap justify-center mt-4">
                  <h1 className='text-gray-900 dark:text-white text-md'>{productName}</h1>
                </div>
                <div className="flex flex-wrap justify-center mt-1">
                  <h5 className='text-gray-900 dark:text-white text-sm'>{productDescription}</h5>
                </div>
                <div className="flex flex-wrap justify-center mt-1">
                  <h5 className='text-gray-900 dark:text-white text-sm'>${productPrice}.00</h5>
                </div>
                <div className="flex flex-wrap justify-center mt-1">
                <button class="py-2 px-2 w-full rounded-xl border border-purple-700 dark:border-purple-500 text-purple-700 dark:text-purple-500 hover:bg-purple-600 hover:text-white"
                onClick={handleClick}>Add To Cart</button> 
                </div>
              </div>
            </div>
          );
        })}
    </div>
    );
  }