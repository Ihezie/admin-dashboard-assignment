import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Profile from "./Profile";
import Search from "@/assets/icons/search.svg?react";
import type { Doctor } from "@/mockData";

interface DoctorDropdownProps {
  doctor: Doctor;
  setDoctor: (doctor: Doctor) => void;
  doctors: Doctor[];
}

const DoctorDropdown = ({
  doctor,
  setDoctor,
  doctors,
}: DoctorDropdownProps) => {
  return (
    <div className="form-item">
      <label
        className="text-sm text-carepulse-gray font-medium"
        htmlFor="doctor"
      >
        Doctor
      </label>
      <DropdownMenu>
        <DropdownMenuTrigger id="doctor" asChild>
          <Button className="bg-transparent border border-noble-black-500 h-12 rounded-lg text-white flex justify-between items-center hover:bg-transparent hover:border-white focus:border-white">
            <div className="flex gap-3.5 items-center ">
              <Search className="size-6" />
              <div className="glass-gradient border-white/10 border rounded-[5px] px-3 py-1">
                <Profile
                  name={doctor.name}
                  avatar={doctor.avatar}
                  containerStyles="gap-1.5"
                  avatarStyles="size-6"
                  textStyles="text-xs"
                />
              </div>
            </div>
            <ChevronDown className="text-[#B6F09C] size-7" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="border-0 px-1 w-(--radix-dropdown-menu-trigger-width) bg-[#0F1113] rounded-2xl shadow-[0_8px_10px_-6px_rgba(6,7,8,0.06),0_25px_50px_-12px_rgba(6,7,8,0.16)] pb-1">
          <DropdownMenuLabel className="font-medium text-xs px-4 py-3">
            Doctors
          </DropdownMenuLabel>
          <DropdownMenuRadioGroup
            className="space-y-1"
            value={doctor.id}
            onValueChange={(value) => {
              const currentDoc = doctors.find((doctor) => doctor.id === value);
              if (currentDoc) setDoctor(currentDoc);
            }}
          >
            {doctors.map(({ name, avatar, id }) => (
              <DropdownMenuRadioItem
                key={id}
                className="px-4 text-base font-semibold py-3 rounded-xl cursor-pointer data-highlighted:bg-linear-to-r data-highlighted:from-[#202526] data-highlighted:to-[#151719] data-[state=checked]:bg-linear-to-r data-[state=checked]:from-[#202526] data-[state=checked]:to-[#151719] data-[state=checked]:border border-white/10"
                value={id}
              >
                <Profile containerStyles="gap-4" name={name} avatar={avatar} />
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
export default DoctorDropdown;
