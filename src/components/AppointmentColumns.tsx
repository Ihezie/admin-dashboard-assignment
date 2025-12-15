import type { ColumnDef } from "@tanstack/react-table";

export type Appointment = {
  id: number;
  patient: string;
  date: string;
  status: "Scheduled" | "Pending" | "Canceled";
  doctor: {
    id: string;
    name: string;
  };
};

export const appointmentColumns: ColumnDef<Appointment>[] = [
  {
    accessorKey: "patient",
    header: "Patient",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "Doctor",
    header: "Doctor",
    // cell: ({ row }) => {
    //   const doctorName = row.getValue("doctor")
    // },
  },
  {
    accessorKey: "actions",
    header: "Actions",
  },
];
