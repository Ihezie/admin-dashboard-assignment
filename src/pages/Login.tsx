import logo from "../assets/icons/logo.svg";
import loginImage from "../assets/login-image.png";
import LoginInput from "../components/LoginInput";
import Person from "../assets/icons/person.svg?react";
import Email from "../assets/icons/email.svg?react";
import Phone from "../assets/icons/phone.svg?react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useState } from "react";
import VerifyOtp from "@/components/VerifyOtp";

interface FormField {
  id: "fullName" | "email" | "phone";
  type: string;
  label: string;
  Icon: React.FunctionComponent;
  placeholder: string;
  validation?: Record<string, Record<string, number | string | RegExp>>;
}

const formFields: Array<FormField> = [
  {
    id: "fullName",
    type: "text",
    label: "Full name",
    Icon: Person,
    placeholder: "John Doe",
    validation: {
      minLength: { value: 3, message: "Must be at least 3 letters" },
    },
  },
  {
    id: "email",
    type: "email",
    label: "Email address",
    Icon: Email,
    placeholder: "johndoe@example.com",
    validation: {
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Invalid email address",
      },
    },
  },
  {
    id: "phone",
    type: "text",
    label: "Phone number",
    Icon: Phone,
    placeholder: "+234 901 334 7728",
    validation: {
      pattern: {
        value: /^\+?(\d{1,3})?[-.\s]?(\(?\d{3}\)?[-.\s]?)?(\d[-.\s]?){6,9}\d$/,
        message: "Invalid phone number format",
      },
    },
  },
];

export interface FormValues {
  fullName: string;
  email: string;
  phone: string;
}

const Login = ({
  setIsAuthenticated,
}: {
  setIsAuthenticated: (isAuthenticated: boolean) => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const [showVerifyOtp, setShowVerifyOtp] = useState(false);



  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // Placeholder for form submission logic
    console.log(data);
    setShowVerifyOtp(true);
    return;
  };

  return (
    <main className="h-screen min-h-160 lg:grid lg:grid-cols-2 2xl:container 2xl:mx-auto lg:max-h-256 lg:min-h-200">
      <section className="relative h-full py-8 md:py-[6%] px-[5%] items-start md:justify-between lg:h-auto lg:px-16 lg:flex lg:flex-col xl:px-27.5">
        <img src={logo} alt="Carepulse Logo" className=" w-30 md:w-auto" />
        <div className="w-full mt-6 md:mt-14 lg:mt-0">
          <div className="mb-16">
            <h1 className="mb-2 md:mb-4.5">Hi there, ....</h1>
            <p className="text-carepulse-gray text-base md:text-lg">
              Get Started with Appointments.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-8 space-y-4 md:mb-12 md:space-y-6">
              {formFields.map((field) => (
                <div key={field.id} className="relative">
                  <LoginInput {...field} register={register} />
                  {errors[field.id] && (
                    <p className="mt-2 text-sm text-red-500 absolute right-0">
                      {errors[field.id]?.message as string}
                    </p>
                  )}
                </div>
              ))}
            </div>
            <button className="btn bg-carepulse-green">Get Started</button>
          </form>
        </div>
        <p className="text-[#76828D] absolute bottom-4 mb:bottom-10 lg:static">
          @carepulse copyright
        </p>
      </section>
      <section className="h-full relative hidden lg:block">
        <img
          src={loginImage}
          alt="Doctors smiling warmly"
          className="size-full absolute object-cover rounded-l-3xl"
        />
      </section>
      {/* Verify OTP Dialog */}
      <VerifyOtp
        show={showVerifyOtp}
        setShowVerifyOtp={setShowVerifyOtp}
        setIsAuthenticated={setIsAuthenticated}
      />
    </main>
  );
};
export default Login;
