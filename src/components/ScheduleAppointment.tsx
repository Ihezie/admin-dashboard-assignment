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
import { useState } from "react";
import { Button } from "./ui/button";

const ScheduleAppointment = ({
  appointmentId,
  status,
}: {
  appointmentId: string;
  status: string | null;
}) => {
  const [open, setOpen] = useState(false);
  const disable = status === "scheduled" || status === "pending" ? true : false;

  return (
    <Dialog open={open && !disable} onOpenChange={setOpen}>
      <DialogTrigger disabled={disable} asChild>
        <Button
          disabled={disable}
          variant="ghost"
          type="button"
          className="text-carepulse-green p-0 bg-transparent! hover:text-carepulse-green"
        >
          Schedule
        </Button>
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
        <ScheduleAppointmentForm
          appointmentId={appointmentId}
          setFormOpen={setOpen}
        />
      </DialogContent>
    </Dialog>
  );
};
export default ScheduleAppointment;
