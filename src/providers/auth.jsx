import React, { createContext, useEffect, useState } from 'react'
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


