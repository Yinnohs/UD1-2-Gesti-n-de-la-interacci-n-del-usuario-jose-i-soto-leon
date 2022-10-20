import { useState, useContext,createContext } from "react"


const AppContext = createContext(undefined)

export const useAppContext = ()=>{
    return useAppContext(AppContext)
}

export const appContextProvider = ()=>{
    const [shopItems, setShopItems] = useState([])
    const globalValue = []

    const AppContextObject = {
        globalValue: {globalValue},
        shopItemsValue:{
            shopItems,setShopItems
        }
    }

    return(
        <AppContext.Provider value={AppContextObject}>
            {props.children}
        </AppContext.Provider>
    )
}

