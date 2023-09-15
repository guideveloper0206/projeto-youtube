import {  createContext, useState } from "react";


export const ContextOpenMenu = createContext();

export const OpenMenu = ({ children }) => {
    const [openMenu, setOpenMenu] = useState(false);

    return(
        <ContextOpenMenu.Provider value= {{openMenu, setOpenMenu}}>
            {children}
        </ContextOpenMenu.Provider>
    )
}