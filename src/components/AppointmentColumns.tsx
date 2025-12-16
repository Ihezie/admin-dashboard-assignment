import type { ColumnDef } from "@tanstack/react-table";
import Profile from "./Profile";
import { statuses, type Appointment } from "@/mockData";
import { cn } from "@/lib/utils";
import ScheduleAppointment from "./ScheduleAppointment";
import CancelAppointment from "./CancelAppointment";

export const appointmentColumns: ColumnDef<Appointment>[] = [
  {
    accessorKey: "patient.name",
    header: "Patient",
    cell: ({ row }) => {
      const { name, avatar } = row.original.patient;
      return <Profile avatar={avatar} name={name} containerStyles="gap-3" />;
    },
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => (
      <span className="font-normal">{row.getValue("date")}</span>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue<"cancelled" | "pending" | "scheduled">(
        "status"
      );
      const Icon = statuses[status]?.Icon;
      const bgColor = statuses[status]?.bgColor;
      const textColor = statuses[status]?.textColor;

      return (
        <div
          className={cn(
            "flex capitalize items-center gap-1.5 font-semibold py-1 pl-2 pr-3 w-max rounded-full text-xs transition-colors",
            bgColor,
            textColor
          )}
        >
          <Icon
            className={cn("size-3", {
              "size-2.25 mt-px": status === "cancelled",
            })}
          />{" "}
          {status}
        </div>
      );
    },
  },
  {
    accessorKey: "doctor.name",
    header: "Doctor",
    cell: ({ row }) => {
      const { name, avatar } = row.original.doctor;
      return <Profile avatar={avatar} name={name} containerStyles="gap-3" />;
    },
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const id = row.original.id;
      const status = row.original.status;
      return (
        <div className="flex gap-3.5 font-semibold">
          <ScheduleAppointment appointmentId={id} status={status} />
          <CancelAppointment appointmentId={id} status={status} />
        </div>
      );
    },
  },
];
