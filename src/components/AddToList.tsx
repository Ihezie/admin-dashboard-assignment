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
import { useAppContext } from "./AppProvider";
import { v4 as uuidv4 } from "uuid";
import type { Appointment } from "@/mockData";

const AddToList = () => {
  const [doctor, setDoctor] = useState(doctors[0]);
  const [patientName, setPatientName] = useState("");
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({
    patientName: "",
  });

  const { dispatch } = useAppContext();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (patientName.trim().length < 2) {
      setErrors((prev) => ({
        ...prev,
        patientName: "Minimum of 2 characters",
      }));
    }
    if (patientName.trim().length >= 2) {
      const appointment: Appointment = {
        id: uuidv4(),
        patient: {
          name: patientName,
          avatar: "",
        },
        date: "Not Scheduled",
        status: null,
        doctor,
        reasonForCancel: null,
        reasonForSchedule: null,
      };
      
      dispatch({
        type: "add-to-list",
        payload: appointment,
      });
      setDoctor(doctors[0]);
      setPatientName("");
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
                  maxLength={24}
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
