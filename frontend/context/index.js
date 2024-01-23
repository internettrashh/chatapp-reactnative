import { createContext } from "react";

export  const GlobalContext = createContext(null);



function Globalstate({children}) {
    return (
        <GlobalContext.Provider value={{}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default Globalstate;



