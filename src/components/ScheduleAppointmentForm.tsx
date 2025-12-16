import { useState, type FormEvent } from "react";

import { doctors } from "@/mockData";
import DoctorDropdown from "./DoctorDropdown";
import DatePicker from "./DatePicker";
import { useAppContext } from "./AppProvider";
import { formatDate } from "@/lib/utils";

const ScheduleAppointmentForm = ({
  setFormOpen,
  appointmentId,
}: {
  setFormOpen: (open: boolean) => void;
  appointmentId: string;
}) => {
  const [date, setDate] = useState<Date | undefined>();
  const [doctor, setDoctor] = useState(doctors[0]);
  const [reason, setReason] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({
    date: "",
    reason: "",
  });
  const { dispatch } = useAppContext()!;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!date) {
      setErrors((prev) => ({ ...prev, date: "Please select a date" }));
    }
    if (reason.trim().length < 10) {
      setErrors((prev) => ({
        ...prev,
        reason: "Minimum of 10 characters",
      }));
    }
    if (date && reason.trim().length >= 10) {
      // Submit the form
      dispatch({
        type: "schedule-appointment",
        payload: {
          appointmentId,
          doctor,
          reasonForSchedule: reason,
          date: formatDate(date),
        },
      });
      setFormOpen(false);
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
        <div className="form-item">
          <label htmlFor="date">Reason for appointment</label>
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
          {errors.reason && <p className="error">{errors.reason}</p>}
        </div>
        <DatePicker
          errors={errors}
          setDate={setDate}
          date={date}
          setErrors={setErrors}
        />
      </div>
      <button type="submit" className="btn bg-carepulse-green mt-10">
        Schedule appointment
      </button>
    </form>
  );
};
export default ScheduleAppointmentForm;
