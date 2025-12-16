import CheckCircle from "@/assets/icons/check-circle.svg?react";
import logo from "@/assets/icons/logo.svg";
import Profile from "@/components/Profile";
import { useAppContext } from "@/components/AppProvider";
import DateIcon from "@/assets/icons/date.svg?react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const Success = () => {
  const { appointmentDetails } = useAppContext();
  return (
    <main className="py-15 flex flex-col justify-center items-center">
      <img alt="Carepulse Logo" src={logo} className="w-30 md:w-auto" />
      <div className="flex flex-col items-center mt-[10vh] sm:mt-[12vh] max-w-153 justify-center">
        <CheckCircle className="" />
        <h1 className="text-center mb-6">
          Your <span className="text-carepulse-green">appointment request</span>{" "}
          has been successfully submitted!
        </h1>
        <p className="font-medium text-carepulse-gray text-lg tracking-wide">
          We'll be in touch shortly to confirm.
        </p>
      </div>
      <div className="mt-14 py-6 sm:mt-11 sm:py-11 flex flex-col px-2 border-y gap-y-5 sm:gap-0 sm:w-[65.5%] border-[#363A3D99] justify-center items-center sm:flex-row mb-10">
        <div className="flex items-center">
          <h2 className="sm:text-lg text-carepulse-gray font-medium mr-7.5">
            Requested appointment details:
          </h2>
          <div className="glass-gradient border-white/10 border rounded-[5px] px-3 py-2.5 mr-6">
            <Profile
              name={appointmentDetails?.doctor.name}
              avatar={appointmentDetails?.doctor.avatar || ""}
              containerStyles="gap-1.5"
              avatarStyles="size-6"
              textStyles="text-xs"
            />
          </div>
        </div>

        <div className="flex gap-2 items-center justify-center">
          <DateIcon />
          <span className="text-lg text-carepulse-gray font-medium">
            {appointmentDetails?.date || "yam kdk kdkd"}
          </span>
        </div>
      </div>
      <Button variant="ghost" className="text-sm">
        <Link to="/">Back to Dashboard</Link>
      </Button>
    </main>
  );
};
export default Success;
