import Link from "next/link";
import { BsPersonCircle } from "react-icons/bs";
import { useSelector } from "react-redux";

const FindNavbarComponent: React.FC<any> = () => {
  const currentUser = useSelector((state: any) => state.user);

  return (
    <nav className="h-24 w-full  flex flex-row items-center px-8 fixed top-0 bg-white z-20 shadow-md">
      <div className="flex flex-col">
        <h1 className="text-4xl text-red-600 leading-2 font-bold">omie</h1>
        <h1 className="text-xs  text-red-600 font-light">cribs & homes</h1>
      </div>
      <div className="flex flex-1 flex-row items-center justify-center">
        <input
          className="w-1/2 h-full px-4 py-2 bg-gray-200 rounded-sm outline-none"
          type="text"
          placeholder="Find omie cribs near you"
        />
        <button className="h-10 rounded-sm mx-2 bg-green-600 text-white px-4 py-2">
          Search
        </button>
      </div>
      <div className="flex flex-row ">
        <Link href="/members/login">
          <div className="flex flex-1 flex-row items-center cursor-pointer">
            <BsPersonCircle size={32} />
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

export default FindNavbarComponent;
