import Logo from "@/assets/icons/logo.svg?react";
import Profile from "./Profile";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-noble-black-800 m-3 px-12 py-6 rounded-[20px]">
      <Logo />
      <Profile />
    </nav>
  );
};
export default Navbar;
