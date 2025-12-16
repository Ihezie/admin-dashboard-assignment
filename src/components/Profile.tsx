import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface ProfileProps {
  name?: string;
  avatar: string;
  containerStyles?: string;
  avatarStyles?: string;
  textStyles?: string;
}

const fallbackBgColors = ["bg-[#B6F09C]", "bg-[#9CC8F0]", "bg-[#D59CF0]"];

const getRandomIndex = () =>
  Math.floor(Math.random() * fallbackBgColors.length);

const Profile = ({
  name = "Admin",
  avatar,
  containerStyles = "",
  avatarStyles = "",
  textStyles = "",
}: ProfileProps) => {
  const fallback = (name: string) => {
    const names = name.split(" ");
    // Get Doctor Initials
    if (name.includes("Dr.")) {
      return names
        .slice(1)
        .map((item) => item.charAt(0).toUpperCase())
        .join("");
    }
    // Get Patient Initials
    return names
      .slice(0, 2)
      .map((item) => item.charAt(0).toUpperCase())
      .join("");
  };
  return (
    <div className={cn("flex gap-1 items-center", containerStyles)}>
      <Avatar className={cn(avatarStyles)}>
        <AvatarImage src={avatar} />
        <AvatarFallback
          className={cn(
            "text-black font-medium",
            fallbackBgColors[getRandomIndex()]
          )}
        >
          {fallback(name)}
        </AvatarFallback>
      </Avatar>
      <span className={cn("text-white font-semibold capitalize", textStyles)}>{name}</span>
    </div>
  );
};
export default Profile;
