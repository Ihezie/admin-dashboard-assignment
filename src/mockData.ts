import Calendar from "./assets/icons/calendar.svg?react";
import Hourglass from "./assets/icons/hourglass.svg?react";
import Alert from "./assets/icons/alert.svg?react";
import X from "./assets/icons/cancelled.svg?react";
import Check from "./assets/icons/check.svg?react";
import sarahSafari from "./assets/doctor-avatars/sarah-safari.png";
import avaWilliams from "./assets/doctor-avatars/ava-williams.png";
import adamSmith from "./assets/doctor-avatars/adam-smith.png";

export type Appointment = {
  id: string;
  patient: {
    name: string;
    avatar: string;
  };
  date: string;
  status: "scheduled" | "pending" | "cancelled";
  doctor: Doctor;
  reasonForCancel: string | null;
  reasonForSchedule: string | null;
};

export type Doctor = {
  id: string;
  name: string;
  avatar: string;
};

export const dashboardCardData = [
  {
    Icon: Calendar,
    title: "scheduled appointments",
    value: 94,
    edgeColor: "bg-[#FFD147]",
  },
  {
    Icon: Hourglass,
    title: "pending appointments",
    value: 32,
    edgeColor: "bg-[#79B5EC]",
  },
  {
    Icon: Alert,
    title: "cancelled appointments",
    value: 56,
    edgeColor: "bg-[#F37877]",
  },
];

export const appointments: Appointment[] = [
  {
    id: "0c8f5e2a-9d6b-4a1c-b7e3-f2d9a6c4b185",
    patient: { name: "Ava Jackson", avatar: "" },
    date: "Jan 12, 2025",
    status: "pending",
    doctor: { id: "3", name: "Dr. Adam Smith", avatar: adamSmith },
    reasonForCancel: null,
    reasonForSchedule: null,
  },
];

export const doctors: Doctor[] = [
  { id: "1", name: "Dr. Sarah Safari", avatar: sarahSafari },
  { id: "2", name: "Dr. Ava Williams", avatar: avaWilliams },
  { id: "3", name: "Dr. Adam Smith", avatar: adamSmith },
];

export const statuses = {
  scheduled: {
    Icon: Check,
    textColor: "text-carepulse-green",
    bgColor: "bg-[#0D2A1F]",
  },
  pending: {
    Icon: Hourglass,
    textColor: "text-[#79B5EC]",
    bgColor: "bg-[#152432]",
  },
  cancelled: {
    Icon: X,
    textColor: "text-[#F37877]",
    bgColor: "bg-[#3E1716]",
  },
};
