import Calendar from "./assets/icons/calendar.svg?react";
import Hourglass from "./assets/icons/hourglass.svg?react";
import Alert from "./assets/icons/alert.svg?react";
import sarahSafari from "./assets/doctor-avatars/sarah-safari.png";
import avaWilliams from "./assets/doctor-avatars/sarah-safari.png";
import adamSmith from "./assets/doctor-avatars/sarah-safari.png";

type Appointment = {
  id: number;
  patient: string;
  date: string;
  status: "Scheduled" | "Pending" | "Canceled";
  doctor: {
    id: string;
    name: string;
  };
};

type Doctor = {
  id: string;
  name: string;
  avatar: string;
};

export const dashboardCardData = [
  {
    Icon: Calendar,
    title: "scheduled appointments",
    value: 94,
    gradient:
      "bg-[linear-gradient(117.58deg,rgba(215,237,237,0.16)_-47.79%,rgba(204,235,235,0)_100%)]",
    edgeColor: "bg-[#FFD147]",
  },
  {
    Icon: Hourglass,
    title: "pending appointments",
    value: 32,
    gradient:
      "bg-[linear-gradient(117.58deg,rgba(215,237,237,0.16)_-47.79%,rgba(204,235,235,0)_100%)]",
    edgeColor: "bg-[#79B5EC]",
  },
  {
    Icon: Alert,
    title: "canceled appointments",
    value: 56,
    gradient:
      "bg-[linear-gradient(117.58deg,rgba(215,237,237,0.16)_-47.79%,rgba(204,235,235,0)_100%)]",
    edgeColor: "bg-[#F37877]",
  },
];

export const appointments: Appointment[] = [
  {
    id: 1,
    patient: "Phoenix Baker",
    date: "Jan 4, 2023",
    status: "Scheduled",
    doctor: {
      id: "1",
      name: "Dr. Sarah Safari",
    },
  },
  {
    id: 2,
    patient: "Liam Johnson",
    date: "Jan 5, 2023",
    status: "Pending",
    doctor: {
      id: "2",
      name: "Dr. Ava Williams",
    },
  },
  {
    id: 3,
    patient: "Olivia Brown",
    date: "Jan 6, 2023",
    status: "Canceled",
    doctor: {
      id: "3",
      name: "Dr. Adam Smith",
    },
  },
  {
    id: 4,
    patient: "Noah Davis",
    date: "Jan 7, 2023",
    status: "Scheduled",
    doctor: {
      id: "1",
      name: "Dr. Sarah Safari",
    },
  },
  {
    id: 5,
    patient: "Emma Wilson",
    date: "Jan 8, 2023",
    status: "Pending",
    doctor: {
      id: "2",
      name: "Dr. Ava Williams",
    },
  },
];

export const doctors: Doctor[] = [
  { id: "1", name: "Dr. Sarah Safari", avatar: sarahSafari },
  { id: "2", name: "Dr. Ava Williams", avatar: avaWilliams },
  { id: "3", name: "Dr. Adam Smith", avatar: adamSmith },
];
