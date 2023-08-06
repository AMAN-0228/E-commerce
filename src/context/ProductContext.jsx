import { createContext } from "react";

const AppContext = createContext()

const API =  "https://api.pujakaitem.com/api/products"

const AppProvider = ({children})=>{
    return (
      <AppContext.Provider value={"aman"}>
        {children}
      </AppContext.Provider>
    )
}

export {AppProvider,AppContext}