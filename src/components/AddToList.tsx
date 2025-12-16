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
import { Button } from "@/components/ui/button";
import Person from "@/assets/icons/person.svg?react";
import DoctorDropdown from "./DoctorDropdown";
import { doctors } from "@/mockData";
import { useState, type FormEvent } from "react";
import DatePicker from "./DatePicker";
import { useAppContext } from "./AppProvider";
import { formatDate } from "@/lib/utils";
import { v4 as uuidv4 } from "uuid";
import type { Appointment } from "@/mockData";

const AddToList = () => {
  const [date, setDate] = useState<Date | undefined>();
  const [reason, setReason] = useState("");
  const [doctor, setDoctor] = useState(doctors[0]);
  const [patientName, setPatientName] = useState("");
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({
    patientName: "",
    date: "",
    reason: "",
  });

  const { dispatch } = useAppContext()!;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (patientName.trim().length < 2) {
      setErrors((prev) => ({
        ...prev,
        patientName: "Minimum of 2 characters",
      }));
    }
    if (!date) {
      setErrors((prev) => ({ ...prev, date: "Please select a date" }));
    }
    if (reason.trim().length < 10) {
      setErrors((prev) => ({
        ...prev,
        reason: "Minimum of 10 characters",
      }));
    }
    if (patientName.trim().length >= 2 && date && reason.trim().length >= 10) {
      const appointment: Appointment = {
        id: uuidv4(),
        patient: {
          name: patientName,
          avatar: "",
        },
        date: formatDate(date),
        status: "scheduled",
        doctor,
        reasonForSchedule: reason,
        reasonForCancel: null,
      };
      dispatch({
        type: "add-to-list",
        payload: appointment,
      });
      setOpen(false);
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className="border-noble-black-500 text-sm font-semibold hover:bg-carepulse-green hover:text-white"
          variant="outline"
        >
          Add to List
        </Button>
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="dialog-content lg:w-[42.33%]"
      >
        <DialogHeader className="gap-4">
          <div className="sm:flex sm:justify-between sm:items-center relative">
            <DialogTitle className="text-xl sm:text-2xl">
              Add Appointment
            </DialogTitle>
            <DialogClose asChild className="dialog-close">
              <button type="button" aria-label="close">
                <Cross />
              </button>
            </DialogClose>
          </div>
          <DialogDescription className="dialog-description">
            Please fill the following details to add an appointment.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit}>
          {/* Patient Name, Doctor,  */}
          <div className="space-y-6">
            <div className="form-item">
              <label htmlFor="patientName">Patient Name </label>
              <div className="flex items-center bg-transparent border border-noble-black-500 rounded-lg py-3 px-4 gap-3 focus-within:border-white">
                <Person />
                <input
                  value={patientName}
                  onChange={(e) => {
                    setPatientName(e.target.value);
                    if (
                      e.target.value.trim().length >= 2 &&
                      errors.patientName
                    ) {
                      setErrors((prev) => ({
                        ...prev,
                        patientName: "",
                      }));
                    }
                  }}
                  required
                  placeholder="Enter patient name"
                  id="patientName"
                  className="w-[90%] text-white outline-none"
                  type="text"
                />
              </div>
              {errors.patientName && (
                <p className="mt-2 text-xs sm:text-sm text-red-500 font-bold absolute right-0 -bottom-4 sm:font-medium sm:-bottom-6">
                  {errors.patientName}
                </p>
              )}
            </div>
            <DoctorDropdown
              doctor={doctor}
              doctors={doctors}
              setDoctor={setDoctor}
            />
            <div className="form-item">
              <label htmlFor="reason">Reason for appointment</label>
              <textarea
                id="reason"
                value={reason}
                onChange={(e) => {
                  setReason(e.target.value);
                  if (errors.reason && e.target.value.trim().length >= 10) {
                    setErrors((prev) => ({ ...prev, reason: "" }));
                  }
                }}
                required
                placeholder="ex: Annual monthly check-up"
              />
              {errors.reason && <p className="error">{errors.reason}</p>}
            </div>
            <DatePicker
              errors={errors}
              setDate={setDate}
              date={date}
              setErrors={setErrors}
            />
          </div>
          <button className="btn bg-carepulse-green mt-10" type="submit">
            Add to List
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
export default AddToList;
