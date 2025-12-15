import type { ColumnDef } from "@tanstack/react-table";
import type { Appointment } from "@/mockData";
import Profile from "./Profile";
import { statuses } from "@/mockData";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Cross from "../assets/icons/cross.svg?react";
import ScheduleAppointmentForm from "./ScheduleAppointmentForm";

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
      const status = row.getValue<"canceled" | "pending" | "scheduled">(
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
              "size-2.25 mt-px": status === "canceled",
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
    cell: () => {
      return (
        <div className="flex gap-3.5 font-semibold">
          {/* Schedule Appointment */}
          <Dialog open={true}>
            <DialogTrigger asChild>
              <button type="button" className="text-carepulse-green">
                Schedule
              </button>
            </DialogTrigger>
            <DialogContent
              showCloseButton={false}
              className="dialog-content lg:w-160"
            >
              <DialogHeader className="gap-4">
                <div className="sm:flex sm:justify-between sm:items-center relative">
                  <DialogTitle className="text-xl sm:text-2xl">
                    Schedule Appointment
                  </DialogTitle>
                  <DialogClose asChild className="dialog-close">
                    <button type="button" aria-label="close">
                      <Cross />
                    </button>
                  </DialogClose>
                </div>
                <DialogDescription className="dialog-description">
                  Please fill in the following details to schedule
                </DialogDescription>
              </DialogHeader>
              <ScheduleAppointmentForm />
            </DialogContent>
          </Dialog>

          {/* Cancel Appointment */}
          <Dialog>
            <DialogTrigger asChild>
              <button type="button" className="text-[#FBECEC]">
                Cancel
              </button>
            </DialogTrigger>
            <DialogContent
              showCloseButton={false}
              className="dialog-content lg:w-160"
            >
              <DialogHeader className="gap-4">
                <div className="sm:flex sm:justify-between sm:items-center relative">
                  <DialogTitle className="text-xl sm:text-2xl">
                    Cancel Appointment
                  </DialogTitle>
                  <DialogClose asChild className="dialog-close">
                    <button type="button" aria-label="close">
                      <Cross />
                    </button>
                  </DialogClose>
                </div>
                <DialogDescription className="dialog-description">
                  Are you sure you want to cancel your appointment?
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      );
    },
  },
];
