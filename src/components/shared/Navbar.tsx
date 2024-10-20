import Logo from "../logo/Logo";
import { CgProfile } from "react-icons/cg";

const Navbar: React.FC = () => {
  return (
    <div className="fixed left-0 right-0 top-0 z-10 mx-auto flex w-[90%] items-center justify-between rounded-lg px-2 py-4 backdrop-blur-md lg:w-[80%]">
      {/* Logo on the left */}
      <div className="flex items-center">
        <Logo />
      </div>

      {/* Sign Up/Sign In button on the right */}
      <div>
        {/* <button className="rounded-lg bg-blue-500 px-4 py-2 font-medium text-white text-xs ">
          Sign Up/Sign In
        </button> */}
        <div className="cursor-pointer">
          <CgProfile className="text-[20px] text-gray-300 md:text-[35px]" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;