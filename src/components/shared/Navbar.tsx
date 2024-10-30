import Link from "next/link";
import Logo from "../logo/Logo";
import { CgProfile } from "react-icons/cg";
import { auth } from "@/auth";
import { logout } from "@/lib/actions/logout";

const Navbar: React.FC = async () => {
  const session = await auth();
  const user = session?.user;
  return (
    <div className="fixed left-0 right-0 top-0 z-10 mx-auto flex w-[90%] items-center justify-between rounded-lg bg-black/30 px-2 py-4 backdrop-blur-md lg:w-[80%]">
      {/* Logo on the left */}
      <div className="flex items-center">
        <Logo />
      </div>

      {/* Sign Up/Sign In button on the right */}
      <div className="flex items-center gap-4">
        <Link href="/dashboard/bookings">
          <button className="rounded-lg bg-blue-500 px-4 py-2 text-xs font-medium text-white">
            Dashboard
          </button>
        </Link>
        {user ? (
          <div className="flex gap-4">
            <Link href={`/${1}`} className="cursor-pointer">
              <CgProfile className="text-[20px] text-gray-300 md:text-[35px]" />
            </Link>
            <form action={logout}>
              <button className="rounded-lg bg-blue-500 px-4 py-2 text-xs font-medium text-white">
                Logout
              </button>
            </form>
          </div>
        ) : (
          <Link href="/login">
            <button className="rounded-lg bg-blue-500 px-4 py-2 text-xs font-medium text-white">
              Sign Up/Sign In
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
