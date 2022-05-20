import Link from "next/link";
import AllTenants from "./AllTenants";
import CardComponent from "./CardComponent";
import TenantDetails from "./TenantDetails";
import { BsPlusLg } from "react-icons/bs";
import { UserProps } from "../types";
import { useSelector } from "react-redux";

interface Props {
  activeCard: string | null;
  activateCard: (name: string) => void;
  tenants: any;
  selectedUser: any;
  selectUser: (user: UserProps) => void;
}

const DashboardHome: React.FC<Props> = ({
  activateCard,
  activeCard,
  tenants,
  selectUser,
  selectedUser,
}) => {
  const currentUser = useSelector((state: any) => state.user);

  // console.log("TEST DEBUG =======================", currentUser);

  return (
    <div className="flex flex-1 flex-col p-5 ml-20">
      {/* Top header */}
      <div className="flex flex-row items-center justify-between mb-4">
        <Link href="/host">
          <div className="p-2 bg-black flex px-3 flex-row items-center rounded-md border-2 cursor-pointer">
            <BsPlusLg color="#f9f6f6" />
            <h1 className="text-white font-medium text-sm ml-3">ADD HOME</h1>
          </div>
        </Link>

        <div className="flex flex-row items-center">
          <h3 className="mr-4">{currentUser?.user?.user?.username}</h3>
          <div className="h-10 w-10 rounded-full bg-gray-400"></div>
        </div>
      </div>

      <h1 className="text-black font-medium mt-4">DASHBOARD</h1>

      <CardComponent activeCard={activeCard} activateCard={activateCard} />

      <div className="flex flex-1 flex-row my-3">
        {/* All tenants left */}
        <AllTenants
          selectedUser={selectedUser}
          selectUser={selectUser}
          tenants={tenants}
        />
        {/* Tenant info */}
        <TenantDetails selectedUser={selectedUser} />
      </div>
    </div>
  );
};

export default DashboardHome;
