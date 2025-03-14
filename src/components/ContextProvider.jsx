import { createContext, useState } from "react";


const MyContext = createContext();

export const ContextProvider = ({children}) => {
    const [name, setName] = useState('Kamala')
    const k = 'Osho'; // constant can also be used
    return <MyContext.Provider value={{name, setName, k}}>
        {children}
    </MyContext.Provider>
}

export default MyContext;