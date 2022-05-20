import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "react-query";

import {
  AllTenants,
  CardComponent,
  CardItem,
  DashboardHeader,
  DashboardHome,
  DashboardUnits,
  LeftSideBar,
  TenantDetails,
} from "../../components";

import tenants from "../../data/users";
import { removeToken } from "../../features/token/tokenSlice";
import { UserProps } from "../../types";
import axios from "axios";
import { APIROUTE, APIURL } from "../../APIRoute/APIRoute";
import { fetchingUserSuccess, removeUser } from "../../features/user/userSlice";

const Dashboard: React.FC<any> = () => {
  const [active, setActive] = useState<string>("home");
  const [activeCard, setActiveCard] = useState<string | null>("rent");

  const [selectedUser, setSelectedUser] = useState<UserProps | any>(tenants[0]);

  const token = useSelector((state: any) => state.token.token);
  const currentUser = useSelector((state: any) => state.user);

  const dispatch = useDispatch();

  const fetchUser = async () => {
    try {
      const result = await axios.get(`${APIURL}/profile/me/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      return await result;
    } catch (error) {
      console.log(error);
    }
  };

  const user = useQuery("fetchUser", fetchUser);

  useEffect(() => {
    // get the token from redux
    if (!token) {
      // if token is not found, redirect to login page
      window.location.href = "/members/login";
      return;
    }

    if (user.data?.data || !currentUser?.user) {
      dispatch(fetchingUserSuccess(user?.data?.data));
    }
  }, [token, user.data?.data, currentUser?.user]);

  // const [ selectedUserID, setSelectedUserID ] = useState<string | number | null>(1);

  const activatePage = (name: string) => {
    setActive(name);
  };

  const activateCard = (name: string) => {
    setActiveCard(name);
  };

  const selectUser = (user: UserProps) => {
    setSelectedUser(user);
  };

  const handleLogout = () => {
    dispatch(removeToken());
    dispatch(removeUser());
    // window.location.href = "/members/login";
  };

  const renderTab = () => {
    switch (active) {
      case "home":
        return (
          <DashboardHome
            activateCard={activateCard}
            activeCard={activeCard}
            selectUser={selectUser}
            selectedUser={selectedUser}
            tenants={tenants}
          />
        );
      case "units":
        return <DashboardUnits />;
      default:
        return (
          <DashboardHome
            activateCard={activateCard}
            activeCard={activeCard}
            selectUser={selectUser}
            selectedUser={selectedUser}
            tenants={tenants}
          />
        );
    }
  };

  // console.log("DEBUG HERE ============>", );

  return (
    <div className="bg-gray-100 flex flex-1 relative">
      <LeftSideBar active={active} activatePage={activatePage} />
      {/* Left side Nav bar */}

      {renderTab()}

      <button onClick={handleLogout} className="absolute top-0 right-0 m-4">
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
