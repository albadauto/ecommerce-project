import React, { createContext, useContext, useEffect, useState } from 'react'
export const HeaderContext = createContext({});

export default function HeaderProvider(props) {
    const [bar, setBar] = useState({
        url: "/Login",
        title: "Entrar"
    });
    
    return (
        <HeaderContext.Provider value={{ bar, setBar }}>
            {props.children}
        </HeaderContext.Provider>
    )
}

export const useAuth = () => useContext(HeaderContext); //Hook personalizado, para não precisar toda vez importar o header Context


