import { createContext, useContext } from "react";
import { ContextProps } from "./Types/ContextProps";
export const AppContext = createContext<Partial<ContextProps>>({});
export const useAppContext = () => useContext(AppContext);
