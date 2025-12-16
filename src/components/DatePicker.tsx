import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import DateIcon from "@/assets/icons/date.svg?react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "./ui/button";
import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";

interface DatePickerProps {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
  errors: Record<string, string>;
  setErrors: Dispatch<SetStateAction<Record<string, string>>>;
}

const DatePicker = ({ date, setDate, errors, setErrors }: DatePickerProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="form-item">
      <label htmlFor="date">Expected Appointment Date</label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            id="date"
            className="flex w-full justify-start font-normal gap-3 h-12 bg-transparent border border-[#363A3D] rounded-lg text-base hover:border-white focus:border-white hover:bg-transparent"
          >
            <DateIcon className="size-6" />
            {date ? (
              <span className="text-white">{date.toLocaleDateString()}</span>
            ) : (
              <span className="text-[#76828D]">
                Select your appointment date
              </span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
          // disable past date
            disabled={{ before: new Date() }}
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
  );
};
export default DatePicker;
