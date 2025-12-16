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
import { useState, type FormEvent } from "react";
import { useAppContext } from "./AppProvider";
import { Button } from "./ui/button";

const CancelAppointment = ({
  appointmentId,
  status,
}: {
  appointmentId: string;
  status: string;
}) => {
  const [error, setError] = useState("");
  const [reason, setReason] = useState("");
  const [open, setOpen] = useState(false);

  const { dispatch } = useAppContext()!;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (reason.trim().length < 10) {
      setError("Minimum of 10 characters");
    }
    if (reason.trim().length >= 10) {
      console.log("hey");

      dispatch({
        type: "cancel-appointment",
        payload: {
          appointmentId,
          reasonForCancel: reason,
        },
      });
      setOpen(false);
    }
  };
  const disable = status === "cancelled" ? true : false;
  return (
    <Dialog open={open && !disable} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" type="button" className="text-[#FBECEC]">
          Cancel
        </Button>
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
        <form onSubmit={handleSubmit}>
          <div className="form-item">
            <label htmlFor="date">Reason for appointment</label>
            <textarea
              id="date"
              value={reason}
              onChange={(e) => {
                setReason(e.target.value);
                if (error && e.target.value.trim().length >= 10) {
                  setError("");
                }
              }}
              required
              placeholder="ex: Urgent meeting came up"
            />
            {error && <p className="error">{error}</p>}
          </div>
          <button className="btn bg-carepulse-red mt-10" type="submit">
            Cancel appointment
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
export default CancelAppointment;
