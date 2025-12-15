import type { UseFormRegister } from "react-hook-form";
import type { FormValues } from "../pages/Login";

interface InputProps {
  id: "fullName" | "email" | "phone";
  type: string;
  label: string;
  Icon: React.FunctionComponent;
  placeholder: string;
  validation?: Record<string, Record<string, number | string | RegExp>>;
  register: UseFormRegister<FormValues>;
}

const LoginInput = ({
  id,
  type,
  label,
  Icon,
  placeholder,
  validation,
  register,
}: InputProps) => {
  return (
    <div>
      <label className="text-sm text-carepulse-gray font-medium" htmlFor={id}>
        {label}
      </label>
      <div className="mt-2 md:mt-4 gradient-outline">
        <div className="flex items-center bg-noble-black-600 border border-noble-black-500 rounded-lg py-3 px-4 gap-3 focus-within:outline-5 outline-[#84DCF53D]">
          <Icon />
          <input
            id={id}
            className="w-[90%] text-white outline-none focus:bg-linear-to-r focus:from-[#82DBF7] focus:to-[#B6F09C] focus:bg-clip-text focus:text-transparent placeholder:text-[#76828D] caret-white focus:caret-[#B6F09C]"
            type={type}
            placeholder={placeholder}
            {...register(id, {
              required: "This field is required",
              ...validation,
            })}
          />
        </div>
      </div>
    </div>
  );
};
export default LoginInput;
