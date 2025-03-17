"use client"
import { useRouter } from 'next/navigation'
import { createContext, useContext, useState } from 'react'

export const AppFloreraContent = createContext()
export const useAppFloreraContent = () => {
    return useContext(AppFloreraContent)
}

export const AppFloreraContentProvider = (props) => {
    const currency = process.env.NEXT_PUBLIC_CURRENCY_CODE
    const currencySymbol = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL

    const router = useRouter()

    const [isSeller, setIsSeller] = useState(true)

    const value = {
        currency, currencySymbol, router,
        isSeller, setIsSeller,
    }

    return (
        <AppFloreraContent.Provider value={value}>
            {props.children}
        </AppFloreraContent.Provider>
    )
}