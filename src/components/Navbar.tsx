import Logo from "@/assets/icons/logo.svg?react";
import Profile from "./Profile";
import avatar from "@/assets/avatar.png";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-noble-black-800 m-3 px-3 rounded-xl py-3 sm:px-6  sm:rounded-[20px] sm:py-6">
      <Logo className="w-30 sm:w-auto" />
      <Profile avatar={avatar} />
    </nav>
  );
};
export default Navbar;
