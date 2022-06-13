import Link from "next/link";
import AllTenants from "./AllTenants";
import CardComponent from "./CardComponent";
import TenantDetails from "./TenantDetails";
import axios from "axios";
import { BsPlusLg } from "react-icons/bs";
import { UserProps } from "../types";
import AllUnits from "./AllUnits";

import tenants from "../data/users";
import DashboardUnitDetails from "./DashboardUnitDetails";
import { useDispatch, useSelector } from "react-redux";
import { APIURL } from "../APIRoute/APIRoute";
import {
  fetchingAdminPropertyFailure,
  fetchingAdminPropertyRequest,
  fetchingAdminPropertySuccess,
} from "../features/adminProperty/adminPropertySlice";
import { useEffect, useState } from "react";

const DashboardUnits: React.FC<any> = () => {
  const [selectedUnit, setSelectedUnit] = useState<any>(null);
  const { token } = useSelector((state: any) => state.token);
  const { loading, adminProperty, error } = useSelector(
    (state: any) => state.adminProperty
  );

  const dispatch = useDispatch();

  useEffect(() => {
    fetchAdminProperty();
  }, [token]);

  const fetchAdminProperty = async () => {
    dispatch(fetchingAdminPropertyRequest());
    try {
      const result = await axios
        .get(`${APIURL}/property/`, {
          headers: {
            Authorization: `Token ${token}`,
          },
        })
        .then((res: any) => {
          dispatch(fetchingAdminPropertySuccess(res.data.results));
          setSelectedUnit(res.data.results[0]);
        })
        .catch((err: any) => {
          console.log(err);
          const error = err.response.data.error;
          dispatch(fetchingAdminPropertyFailure(error));
        });
      // return await result;
    } catch (error) {
      console.log(error);
    }
  };

  const selectedUser = tenants[0];
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
          <h3 className="mr-4">Sekkamatte John</h3>
          <div className="h-10 w-10 rounded-full bg-gray-400"></div>
        </div>
      </div>

      <h1 className="text-black font-medium mt-4">My Units</h1>

      {/* <CardComponent activeCard={activeCard} activateCard={activateCard} /> */}

      <div className="flex flex-1 flex-row my-3">
        {/* All units left */}
        {loading ? (
          <div>Loading...</div>
        ) : (
          <AllUnits
            properties={adminProperty}
            setSelectedUnit={setSelectedUnit}
          />
        )}
        {/* Tenant info */}
        {loading || !selectedUnit ? (
          <div>Loading...</div>
        ) : (
          <DashboardUnitDetails
            selectedUser={selectedUser}
            selectedUnit={selectedUnit}
          />
        )}
      </div>
    </div>
  );
};

export default DashboardUnits;
