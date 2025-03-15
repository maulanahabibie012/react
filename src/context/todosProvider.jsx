import { createContext } from "react";

export const TodosContext = createContext();

export const TodosProvider = ({ children }) => {
    return <TodosContext.Provider value={{}}>{children}</TodosContext.Provider>;
    };