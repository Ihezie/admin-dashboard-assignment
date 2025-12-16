/* eslint-disable react-refresh/only-export-components */
import { appointments, type Appointment } from "@/mockData";
import reducer, { type Action } from "@/reducer";
import { createContext, useContext, useReducer, type ReactNode } from "react";
import type { Dispatch } from "react";

type AppContextType = {
  data: Appointment[];
  dispatch: Dispatch<Action>;
};

const AppContext = createContext<AppContextType | null>(null);

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [data, dispatch] = useReducer(reducer, appointments);

  return <AppContext value={{ data, dispatch }}>{children}</AppContext>;
};
export default AppProvider;

export const useAppContext = () => useContext(AppContext);
