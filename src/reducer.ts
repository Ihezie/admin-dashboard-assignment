import type { Appointment, Doctor } from "./mockData";
export interface Action {
  type:
    | "add-to-list"
    | "cancel-appointment"
    | "schedule-appointment"
    | "delete-appointment";
  payload: Appointment | Schedule | Cancel | string;
}
interface Schedule {
  appointmentId: string;
  doctor: Doctor;
  reasonForSchedule: string;
  date: string;
}
interface Cancel {
  appointmentId: string;
  reasonForCancel: string;
}

const reducer = (state: Appointment[], { type, payload }: Action) => {
  switch (type) {
    case "add-to-list": {
      const newAppointment = payload as Appointment;
      console.log(newAppointment);
      return [newAppointment, ...state];
    }
    case "schedule-appointment": {
      const schedule = payload as Schedule;
      const newState = state.map((appointment) => {
        if (appointment.id === schedule.appointmentId) {
          const newAppointment: Appointment = {
            ...appointment,
            status: "pending",
            doctor: schedule.doctor,
            reasonForSchedule: schedule.reasonForSchedule,
            date: schedule.date,
          };
          return newAppointment;
        }
        return appointment;
      });
      return newState;
    }
    case "cancel-appointment": {
      const cancel = payload as Cancel;
      const newState = state.map((appointment) => {
        if (appointment.id === cancel.appointmentId) {
          const newAppointment: Appointment = {
            ...appointment,
            status: "cancelled",
            reasonForCancel: cancel.reasonForCancel,
          };
          return newAppointment;
        }
        return appointment;
      });
      return newState;
    }
    case "delete-appointment": {
      const deleteId = payload as string;
      const newState = state.filter((appointment) => {
        if (appointment.id !== deleteId) return appointment;
      });
      return newState;
    }
    default:
      console.log("Unrecognized Action Type");
      return state;
  }
};

export default reducer;
