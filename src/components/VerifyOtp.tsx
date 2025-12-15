import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { useState } from "react";
import type { FormEvent } from "react";
import Cross from "../assets/icons/cross.svg?react";
import { useNavigate } from "react-router";

const VerifyOtp = ({
  show,
  setShowVerifyOtp,
  setIsAuthenticated,
}: {
  show: boolean;
  setShowVerifyOtp: (show: boolean) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
}) => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleOtp = (e: FormEvent) => {
    // Placeholder for OTP verification logic
    e.preventDefault();
    if (otp.length < 6) {
      setError("Please enter a valid 6-digit OTP");
      return;
    }
    console.log("OTP Entered:", otp);
    setIsAuthenticated(true);
    setShowVerifyOtp(false);
    navigate("/");
  };

  return (
    <Dialog open={show}>
      <DialogContent
        showCloseButton={false}
        className="bg-modal-glass text-white border-none sm:p-10 gap-10 sm:pb-12.5 w-auto! max-w-none!"
      >
        <DialogHeader className="gap-4">
          <div className="sm:flex sm:justify-between sm:items-center relative">
            <DialogTitle className="text-xl sm:text-2xl">
              Verify OTP{" "}
            </DialogTitle>
            <DialogClose
              asChild
              className="absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 text-white opacity-70 sm:static hover:opacity-100"
            >
              <button
                onClick={() => {
                  setShowVerifyOtp(false);
                }}
                type="button"
                aria-label="close"
              >
                <Cross />
              </button>
            </DialogClose>
          </div>
          <DialogDescription className="text-s text-carepulse-gray sm:text-base font-medium">
            Please enter the OTP sent to your registered mobile number.
          </DialogDescription>
        </DialogHeader>
        <form
          className=""
          onSubmit={(e) => {
            handleOtp(e);
          }}
        >
          <div className="relative">
            <InputOTP
              value={otp}
              onChange={(value) => {
                setOtp(value);
                if (error && value.length === 6) {
                  setError("");
                }
              }}
              maxLength={6}
              pattern={REGEXP_ONLY_DIGITS}
            >
              <InputOTPGroup className="gap-2 sm:gap-4.5 w-full mb-10">
                {Array.from({ length: 6 }).map((_, index) => (
                  <InputOTPSlot
                    className="size-12 md:size-20 border border-[#363A3D] rounded-lg! font-medium text-xl md:text-5xl text-carepulse-green bg-noble-black-700"
                    key={index}
                    index={index}
                  />
                ))}
              </InputOTPGroup>
            </InputOTP>
            {error && (
              <p className="absolute text-[13px] text-red-500 w-full text-center bottom-2.5">
                {error}
              </p>
            )}
          </div>

          <button type="submit" className="btn bg-carepulse-green">
            Verify
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
export default VerifyOtp;
