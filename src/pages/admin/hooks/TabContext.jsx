import { createContext, useState } from "react";
export const Uicontext = createContext()
const TabContext = ({ children }) => {
    const [tab, setTab] = useState(1);
    const handleTabUi = (index) => {
        setTab(index)
    }
    const value = {
        tab,
        handleTabUi
    }
    return (
        <div>
            <Uicontext.Provider value={ value }>
                {children}
            </Uicontext.Provider>
        </div>
    );
};

export default TabContext;