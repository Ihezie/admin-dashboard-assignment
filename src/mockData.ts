import Calendar from "./assets/icons/calendar.svg?react";
import Hourglass from "./assets/icons/hourglass.svg?react";
import Alert from "./assets/icons/alert.svg?react";
import X from "./assets/icons/canceled.svg?react";
import Check from "./assets/icons/check.svg?react";
import sarahSafari from "./assets/doctor-avatars/sarah-safari.png";
import avaWilliams from "./assets/doctor-avatars/ava-williams.png";
import adamSmith from "./assets/doctor-avatars/adam-smith.png";

export type Appointment = {
  id: number;
  patient: {
    name: string;
    avatar: string;
  };
  date: string;
  status: "scheduled" | "pending" | "canceled";
  doctor: Doctor;
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
    title: "canceled appointments",
    value: 56,
    edgeColor: "bg-[#F37877]",
  },
];

export const appointments: Appointment[] = [
  {
    id: 1,
    patient: {
      name: "John Doe",
      avatar: "",
    },
    date: "Jan 4, 2023",
    status: "scheduled",
    doctor: {
      id: "1",
      name: "Dr. Sarah Safari",
      avatar: sarahSafari,
    },
  },
  {
    id: 2,
    patient: {
      name: "Jane Smith",
      avatar: "",
    },
    date: "Jan 5, 2023",
    status: "pending",
    doctor: {
      id: "2",
      name: "Dr. Ava Williams",
      avatar: avaWilliams,
    },
  },
  {
    id: 3,
    patient: {
      name: "Michael Johnson",
      avatar: "",
    },
    date: "Jan 6, 2023",
    status: "canceled",
    doctor: {
      id: "3",
      name: "Dr. Adam Smith",
      avatar: adamSmith,
    },
  },
  {
    id: 4,
    patient: {
      name: "Emily Davis",
      avatar: "",
    },
    date: "Jan 7, 2023",
    status: "scheduled",
    doctor: {
      id: "1",
      name: "Dr. Sarah Safari",
      avatar: sarahSafari,
    },
  },
  {
    id: 5,
    patient: {
      name: "Daniel Wilson",
      avatar: "",
    },
    date: "Jan 8, 2023",
    status: "pending",
    doctor: {
      id: "2",
      name: "Dr. Ava Williams",
      avatar: avaWilliams,
    },
  },
  {
    id: 6,
    patient: {
      name: "Olivia Martinez",
      avatar: "",
    },
    date: "Jan 9, 2023",
    status: "canceled",
    doctor: {
      id: "3",
      name: "Dr. Adam Smith",
      avatar: adamSmith,
    },
  },
  {
    id: 7,
    patient: {
      name: "Sophia Anderson",
      avatar: "",
    },
    date: "Jan 10, 2023",
    status: "scheduled",
    doctor: {
      id: "1",
      name: "Dr. Sarah Safari",
      avatar: sarahSafari,
    },
  },
  {
    id: 8,
    patient: {
      name: "Liam Thomas",
      avatar: "",
    },
    date: "Jan 11, 2023",
    status: "pending",
    doctor: {
      id: "2",
      name: "Dr. Ava Williams",
      avatar: avaWilliams,
    },
  },
  {
    id: 9,
    patient: {
      name: "Ava Jackson",
      avatar: "",
    },
    date: "Jan 12, 2023",
    status: "canceled",
    doctor: {
      id: "3",
      name: "Dr. Adam Smith",
      avatar: adamSmith,
    },
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
  canceled: {
    Icon: X,
    textColor: "text-[#F37877]",
    bgColor: "bg-[#3E1716]",
  },
};
