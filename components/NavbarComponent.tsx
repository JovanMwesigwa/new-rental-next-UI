import Link from "next/link";
import { BiSearchAlt } from "react-icons/bi";
import { BsPersonCircle } from "react-icons/bs";
import { RiBuilding2Line, RiParentLine } from "react-icons/ri";
import { useSelector } from "react-redux";

const NavbarComponent: React.FC<any> = () => {
  const currentUser = useSelector((state: any) => state.user);

  return (
    <nav className="h-16 w-full  flex flex-row items-center px-14 justify-between fixed top-0 bg-white z-20">
      <div className="flex flex-col flex-1">
        <h1 className="text-2xl text-red-600 leading-4 font-bold">omie</h1>
        <h1 className="text-xs  text-red-600 font-light">cribs & homes</h1>
      </div>
      {/* nav tabs */}
      {/* tab 1 */}
      <div className="flex flex-1 flex-row ">
        <div className="flex flex-1 flex-row items-center cursor-pointer">
          <BiSearchAlt size={30} />
          <Link href="/find">
            <div className="px-3">
              <h1 className="font-normal text-sm leading-3">Find Omies</h1>
              <h1 className="text-xs  font-light">Find clean hostels</h1>
            </div>
          </Link>
        </div>
      </div>
      {/* tab 1 */}
      <div className="flex flex-1 flex-row ">
        <div className="flex flex-1 flex-row items-center cursor-pointer">
          <RiBuilding2Line size={30} />
          <div className="px-3">
            <h1 className="font-normal text-sm leading-3">
              List your property
            </h1>
            <h1 className="text-xs  font-light">Get tenants in just 30 min</h1>
          </div>
        </div>
      </div>
      {/* tab 1 */}
      <div className="flex flex-1 flex-row ">
        <div className="flex flex-1 flex-row items-center cursor-pointer">
          <RiParentLine size={30} />
          <div className="px-3">
            <h1 className="font-normal text-sm leading-3">
              Manage your tenants
            </h1>
            <h1 className="text-xs  font-light">Manage your tenant easily</h1>
          </div>
        </div>
      </div>

      {/* tab 1 */}
      <div className="flex flex-1 flex-row ">
        <Link href="/members/login">
          <div className="flex flex-1 flex-row items-center cursor-pointer">
            <BsPersonCircle size={28} />
            {currentUser?.user?.user ? (
              <Link href="/dashboard">
                <div className="px-3">
                  <h1 className="font-normal text-sm leading-3">
                    {currentUser?.user?.user?.username}
                  </h1>
                </div>
              </Link>
            ) : (
              <div className="px-3">
                <h1 className="font-normal text-sm leading-3">
                  Login / Signup
                </h1>
              </div>
            )}
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default NavbarComponent;
