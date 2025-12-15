import DateIcon from "@/assets/icons/date.svg?react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { useState, type FormEvent } from "react";

import { doctors } from "@/mockData";
import DoctorDropdown from "./DoctorDropdown";

const ScheduleAppointmentForm = () => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>();
  const [doctor, setDoctor] = useState(doctors[0]);
  const [reason, setReason] = useState("");
  const [errors, setErrors] = useState({
    date: "",
    reason: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!date) {
      setErrors((prev) => ({ ...prev, date: "Please select a date" }));
    }
    if (reason.trim().length === 0) {
      setErrors((prev) => ({ ...prev, reason: "Please provide a reason" }));
    }
    if (reason.length < 10) {
      setErrors((prev) => ({
        ...prev,
        reason: "Minimum of 10 characters",
      }));
    }
    if (errors.date === "" && errors.reason === "") {
      // Submit the form
      console.log({ doctor, date, reason });
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-6">
        <DoctorDropdown
          doctor={doctor}
          setDoctor={setDoctor}
          doctors={doctors}
        />
        <div className="flex flex-col gap-3 relative">
          <label
            className="text-sm text-carepulse-gray font-medium"
            htmlFor="date"
          >
            Reason for appointment
          </label>
          <textarea
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
          {errors.reason && (
            <p className="mt-2 text-xs sm:text-sm text-red-500 font-bold absolute right-0 -bottom-4 sm:font-normal sm:-bottom-6">
              {errors.reason}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-3 relative">
          <label
            className="text-sm text-carepulse-gray font-medium"
            htmlFor="date"
          >
            Expected Appointment Date
          </label>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                id="date"
                className="flex w-full justify-start font-normal gap-3 h-12 bg-transparent border border-[#363A3D] rounded-lg text-base hover:border-carepulse-green hover:bg-transparent"
              >
                <DateIcon className="size-6" />
                {date ? (
                  <span className="text-white">
                    {date.toLocaleDateString()}
                  </span>
                ) : (
                  <span className="text-[#76828D]">
                    Select your appointment date
                  </span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-auto overflow-hidden p-0"
              align="start"
            >
              <Calendar
                mode="single"
                selected={date}
                captionLayout="dropdown"
                onSelect={(date) => {
                  setDate(date);
                  setOpen(false);
                  setErrors((prev) => ({ ...prev, date: "" }));
                }}
              />
            </PopoverContent>
          </Popover>
          {errors.date && (
            <p className="mt-2 text-xs sm:text-sm text-red-500 font-bold sm:font-normal absolute right-0 -bottom-4 sm:-bottom-6">
              {errors.date}
            </p>
          )}
        </div>
      </div>
      <button type="submit" className="btn bg-carepulse-green mt-10">
        Schedule appointment
      </button>
    </form>
  );
};
export default ScheduleAppointmentForm;
