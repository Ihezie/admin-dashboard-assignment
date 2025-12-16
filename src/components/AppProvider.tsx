/* eslint-disable react-refresh/only-export-components */
import { appointments, type Appointment, type Doctor } from "@/mockData";
import reducer, { type Action } from "@/reducer";
import {
  createContext,
  useContext,
  useReducer,
  useState,
  type ReactNode,
} from "react";
import type { Dispatch } from "react";

type AppContextType = {
  data: Appointment[];
  dispatch: Dispatch<Action>;
  appointmentDetails: appointmentDetails | null;
  setAppointmentDetails: (appointmentDetails: appointmentDetails) => void;
};
type appointmentDetails = {
  doctor: Doctor;
  date: string;
};

const AppContext = createContext<AppContextType | null>(null);

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [data, dispatch] = useReducer(reducer, appointments);
  const [appointmentDetails, setAppointmentDetails] =
    useState<appointmentDetails | null>(null);

  return (
    <AppContext
      value={{ data, dispatch, appointmentDetails, setAppointmentDetails }}
    >
      {children}
    </AppContext>
  );
};
export default AppProvider;

export const useAppContext = (): AppContextType => {
  const ctx = useContext(AppContext);

  if (!ctx) {
    throw new Error("useAppContext must be used within AppProvider");
  }

  return ctx;
};
