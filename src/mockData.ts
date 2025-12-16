import Calendar from "./assets/icons/calendar.svg?react";
import Hourglass from "./assets/icons/hourglass.svg?react";
import Alert from "./assets/icons/alert.svg?react";
import X from "./assets/icons/cancelled.svg?react";
import Check from "./assets/icons/check.svg?react";
import sarahSafari from "./assets/doctor-avatars/sarah-safari.png";
import avaWilliams from "./assets/doctor-avatars/ava-williams.png";
import adamSmith from "./assets/doctor-avatars/adam-smith.png";
import jasmine from "./assets/doctor-avatars/jasmine.png";

export type Appointment = {
  id: string;
  patient: {
    name: string;
    avatar: string;
  };
  date: string;
  status: "scheduled" | "pending" | "cancelled" | null;
  doctor: Doctor;
  reasonForCancel: string | null;
  reasonForSchedule: string | null;
};

export type Icon = React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & {
    title?: string;
    titleId?: string;
    desc?: string;
    descId?: string;
  }
>;

export type Doctor = {
  id: string;
  name: string;
  avatar: string;
};

export const dashboardCardData: {
  Icon: Icon;
  title: "cancelled" | "scheduled" | "pending";
  edgeColor: string;
}[] = [
  {
    Icon: Calendar,
    title: "scheduled",
    edgeColor: "bg-[#FFD147]",
  },
  {
    Icon: Hourglass,
    title: "pending",
    edgeColor: "bg-[#79B5EC]",
  },
  {
    Icon: Alert,
    title: "cancelled",
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
  {
    id: "b1a57e98-0cde-4fcb-b0c0-5d4f8f5c3a12",
    patient: { name: "Liam Brown", avatar: "" },
    date: "Feb 5, 2025",
    status: "scheduled",
    doctor: { id: "1", name: "Dr. Sarah Safari", avatar: sarahSafari },
    reasonForCancel: null,
    reasonForSchedule: "Routine checkup",
  },
  {
    id: "f2d6c1e4-7a3b-49a2-8b72-3c7f6d9b2a41",
    patient: { name: "Emma Wilson", avatar: "" },
    date: "Mar 18, 2025",
    status: "cancelled",
    doctor: { id: "2", name: "Dr. Ava Williams", avatar: avaWilliams },
    reasonForCancel: "Patient unavailable",
    reasonForSchedule: null,
  },
  {
    id: "a3b9f8c7-5d6e-4b1a-9c2e-7f5d8e1b2c33",
    patient: { name: "Noah Davis", avatar: "" },
    date: "Apr 22, 2025",
    status: "pending",
    doctor: { id: "4", name: "Dr. Michael May", avatar: "" },
    reasonForCancel: null,
    reasonForSchedule: null,
  },
  {
    id: "d4e1c7b2-6f8a-4b9c-8d3e-5a1f2b7c9d44",
    patient: { name: "Olivia Martinez", avatar: "" },
    date: "May 10, 2025",
    status: "scheduled",
    doctor: { id: "5", name: "Dr. Jasmine Lee", avatar: jasmine },
    reasonForCancel: null,
    reasonForSchedule: "Consultation",
  },
  {
    id: "c5f2d8b1-7a9e-4c3f-b6d2-1e3f5a7b8c55",
    patient: { name: "Ethan Thomas", avatar: "" },
    date: "Jun 8, 2025",
    status: "cancelled",
    doctor: { id: "3", name: "Dr. Adam Smith", avatar: adamSmith },
    reasonForCancel: "Doctor unavailable",
    reasonForSchedule: null,
  },
  {
    id: "e6a3f1b4-8c2d-4d9e-9f1b-2c4d6e7f9a66",
    patient: { name: "Sophia Lee", avatar: "" },
    date: "Jul 15, 2025",
    status: "pending",
    doctor: { id: "1", name: "Dr. Sarah Safari", avatar: sarahSafari },
    reasonForCancel: null,
    reasonForSchedule: null,
  },
  {
    id: "f7b4d2c3-9e1f-4a7b-8c2d-3d5f7e8a0b77",
    patient: { name: "James Anderson", avatar: "" },
    date: "Aug 20, 2025",
    status: "scheduled",
    doctor: { id: "2", name: "Dr. Ava Williams", avatar: avaWilliams },
    reasonForCancel: null,
    reasonForSchedule: "Follow-up",
  },
  {
    id: "a8c5e3d4-0b2f-4c8e-9d3f-4e6f8a9b1c88",
    patient: { name: "Mia Johnson", avatar: "" },
    date: "Sep 12, 2025",
    status: "pending",
    doctor: { id: "4", name: "Dr. Michael May", avatar: "" },
    reasonForCancel: null,
    reasonForSchedule: null,
  },
  {
    id: "b9d6f4e5-1c3a-4d9f-8e4a-5f7b9c0d2e99",
    patient: { name: "William Garcia", avatar: "" },
    date: "Oct 5, 2025",
    status: "cancelled",
    doctor: { id: "5", name: "Dr. Jasmine Lee", avatar: jasmine },
    reasonForCancel: "Patient rescheduled",
    reasonForSchedule: null,
  },
];
export const doctors: Doctor[] = [
  { id: "1", name: "Dr. Sarah Safari", avatar: sarahSafari },
  { id: "2", name: "Dr. Ava Williams", avatar: avaWilliams },
  { id: "3", name: "Dr. Adam Smith", avatar: adamSmith },
  { id: "4", name: "Dr. Michael May", avatar: "" },
  { id: "5", name: "Dr. Jasmine Lee", avatar: jasmine },
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
