"use client"
import { productsCard, productsDetailDummyData } from '@/assets/product/dataProducts'
import { useRouter } from 'next/navigation'
import { createContext, useContext, useEffect, useState } from 'react'

export const AppFloreraContent = createContext()
export const useAppFloreraContent = () => {
    return useContext(AppFloreraContent)
}

export const AppFloreraContentProvider = (props) => {
    const currency = process.env.NEXT_PUBLIC_CURRENCY_CODE
    const currencySymbol = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL

    const router = useRouter()

    const [isSeller, setIsSeller] = useState(true)
    const [products, setProducts] = useState([])

    const fetchProductData = async () => {
        setProducts(productsDetailDummyData)
    }

    // const fetchUserData = async () => {
    //     setUserData(userDummyData)
    // }

    useEffect(() => {
        fetchProductData()
    }, [])

    // useEffect(() => {
    //     fetchUserData()
    // }, [])

    const value = {
        currency, currencySymbol, router,
        isSeller, setIsSeller, products, setProducts, 
        fetchProductData,
    }

    return (
        <AppFloreraContent.Provider value={value}>
            {props.children}
        </AppFloreraContent.Provider>
    )
}