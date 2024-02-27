import axios from 'axios'
import React, { useContext, useEffect, useReducer, useState } from 'react'
import { createContext } from 'react'
import { cartReducer } from './Reducer'

const Cart = createContext()
const Context = ({children}) => {

    const[data,setdata]= useState([])
    const getdata = async()=>{
        try {
          const cartt =   await axios.get(`https://fakestoreapi.com/products`)
          console.log(cartt.data)
                setdata(cartt.data)

        } catch (error) {
            console.log(error)
        }
    
    }
    useEffect(()=>{
        getdata()
    },[])

    const[state,dispatch]= useReducer(cartReducer,{
        data:data,
        Cart:[],
    })
  return (
  <Cart.Provider value={{state,dispatch}}>
{children}
  </Cart.Provider>
  )
}

export default Context
export const Cartstate = ()=>{
    return useContext(Cart)
}
