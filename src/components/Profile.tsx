import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import avatar from "@/assets/avatar.png";

const Profile = () => {
  return (
    <div className="flex gap-1 items-center">
      <Avatar>
        <AvatarImage src={avatar} />
        <AvatarFallback>A</AvatarFallback>
      </Avatar>
      <span className="text-white font-semibold">Admin</span>
    </div>
  );
};
export default Profile;
