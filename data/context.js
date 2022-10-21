import { useState, useContext,createContext } from "react"
import { mockData } from "../utils"


export const AppContext = createContext([[], () => {}])


export const AppContextProvider = (props)=>{
    const [shopArticles, setShopArticles] = useState([])

    return(
        <AppContext.Provider value={[shopArticles, setShopArticles]}>
            {props.children}
        </AppContext.Provider>
    )
}

