import Image from "next/image";
import { AnalysisProps, UserProps } from "../types";
import { GoLocation } from "react-icons/go";
import { CgGym } from "react-icons/cg";
import { GiBrickWall, GiWashingMachine } from "react-icons/gi";
import { AiOutlineWifi } from "react-icons/ai";
import { RiArchiveDrawerLine, RiParkingLine } from "react-icons/ri";
import {
  FaRegMoneyBillAlt,
  FaToilet,
  FaFireExtinguisher,
  FaSwimmingPool,
} from "react-icons/fa";
import { BiBed, BiBath } from "react-icons/bi";
import axios from "axios";
import {
  MdOutlinePower,
  MdOutlineHotTub,
  MdSmokeFree,
  MdOutlineLocalLaundryService,
} from "react-icons/md";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { APIURL } from "../APIRoute/APIRoute";
import { FiMoreVertical } from "react-icons/fi";
import useFetch from "../hooks/useFetch";

interface Props {
  selectedUser: UserProps | any;
  selectedUnit: any;
}

const DashboardUnitDetails: React.FC<Props> = ({
  selectedUser,
  selectedUnit,
}) => {
  const { token } = useSelector((state: any) => state.token);

  const getPropertyDetails = async () => {
    try {
      const result = await axios.get(
        `${APIURL}/property/detail/${selectedUnit.id}/`,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      return await result.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getPropertyFirstImages = async () => {
    try {
      const result = await axios.get(
        `${APIURL}/property/first_front_images/${selectedUnit.id}/`,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      return await result.data;
    } catch (error) {
      console.log(error);
    }
  };

  const query = useQuery(
    ["propertyDetails", selectedUnit.id],
    getPropertyDetails
  );

  const queryFrontImages = useQuery(
    ["propertyFrontImages", selectedUnit.id],
    getPropertyFirstImages
  );

  return (
    <div className="bg-white p-6 flex flex-col flex-1 ml-2 rounded-md">
      {!selectedUnit ? (
        <div className="flex w-full h-56 flex-wrap flex-row" />
      ) : (
        <>
          {query.isLoading ? (
            <p>Loading.....</p>
          ) : (
            <>
              <div className="flex w-full h-56 flex-wrap flex-row">
                {queryFrontImages.isLoading ? (
                  <>
                    <div className="w-24 h-24 mr-3 mb-3 bg-gray-400 flex items-center justify-center rounded-md cursor-pointer relative overflow-hidden">
                      <h2 className="text-xs text-center text-white font-semibold">
                        image 1
                      </h2>
                    </div>
                    <div className="w-24 h-24 mr-3 mb-3 bg-gray-400 flex items-center justify-center rounded-md cursor-pointer relative overflow-hidden">
                      <h2 className="text-xs text-center text-white font-semibold">
                        image 2
                      </h2>
                    </div>
                    <div className="w-24 h-24 mr-3 mb-3 bg-gray-400 flex items-center justify-center rounded-md cursor-pointer relative overflow-hidden">
                      <h2 className="text-xs text-center text-white font-semibold">
                        image 3
                      </h2>
                    </div>
                    <div className="w-24 h-24 mr-3 mb-3 bg-gray-400 flex items-center justify-center rounded-md cursor-pointer relative overflow-hidden">
                      <h2 className="text-xs text-center text-white font-semibold">
                        image 4
                      </h2>
                    </div>
                  </>
                ) : (
                  <>
                    {queryFrontImages.data.results.map((image: any) => (
                      <div
                        key={image.id}
                        className="w-24 h-24 mr-3 mb-3 bg-gray-100 rounded-md cursor-pointer relative overflow-hidden"
                      >
                        <Image
                          src={image.image}
                          alt="user picture"
                          layout="fill"
                        />
                      </div>
                    ))}

                    <div className="w-24 h-24 mr-3 mb-3 bg-gray-400 flex items-center justify-center rounded-md cursor-pointer relative overflow-hidden">
                      <h2 className="text-xs text-center text-white font-semibold">
                        See more photos
                      </h2>
                    </div>
                  </>
                )}

                {/* <div className="w-24 h-24 mr-3 mb-3 bg-gray-100 rounded-md cursor-pointer relative overflow-hidden">
                  <Image
                    src={selectedUser.picture}
                    alt="user picture"
                    layout="fill"
                  />
                </div>
                <div className="w-24 h-24 mr-3 mb-3 bg-gray-100 rounded-md cursor-pointer relative overflow-hidden">
                  <Image
                    src={selectedUser.picture}
                    alt="user picture"
                    layout="fill"
                  />
                </div>
                <div className="w-24 h-24 mr-3 mb-3 bg-gray-100 rounded-md cursor-pointer relative overflow-hidden">
                  <Image
                    src={selectedUser.picture}
                    alt="user picture"
                    layout="fill"
                  />
                </div>
                <div className="w-24 h-24 mr-3 mb-3 bg-gray-400 flex items-center justify-center rounded-md cursor-pointer relative overflow-hidden">
                  <h2 className="text-xs text-center text-white font-semibold">
                    See more photos
                  </h2>
                </div> */}

                <div className="flex flex-col py-3">
                  <h1 className="text-sm font-semibold">
                    {query.data.title ? query.data.title : "My Property"}
                  </h1>
                  <div className="flex flex-row">
                    <h1 className="text-sm font-semibold">Status:</h1>
                    <h1 className="text-sm ml-2 text-red-600">
                      {query.data.is_occupied
                        ? query.data.is_occupied
                        : "Vacant"}
                    </h1>
                  </div>
                  {query.data.is_occupied && (
                    <div className="flex flex-row">
                      <h1 className="text-sm font-semibold">Tenant:</h1>
                      <h1 className="text-sm ml-2">Mugezi Kigozi</h1>
                    </div>
                  )}

                  <div className="flex flex-row">
                    <h1 className="text-sm font-semibold">Rent:</h1>
                    <h1 className="text-sm ml-2 text-green-600">
                      {query.data.is_occupied
                        ? "CLEARED"
                        : `UGX ${query.data.charge_per_month}`}
                    </h1>
                  </div>
                </div>
                <div className="w-full h-[0.5px] bg-gray-300" />
              </div>

              <div className="flex flex-1 flex-col mt-4">
                <div className="flex flex-col flex-1 mb-4 flex-grow">
                  <div className="flex flex-row w-full">
                    <div className="p-4 mr-3 bg-gray-300 flex items-center justify-center rounded-md">
                      <GoLocation size={18} />
                    </div>
                    <h1 className="text-sm font-">
                      {query.data.address?.zip_code},{" "}
                      {query.data.address?.street}, {query.data.address?.city},{" "}
                      {query.data.address?.country}
                    </h1>
                  </div>
                </div>
                <div className="flex flex-col flex-1 mb-4 flex-grow">
                  <div className="flex flex-row w-full">
                    <div className="p-4 mr-3 bg-gray-300 flex items-center justify-center rounded-md">
                      <FaRegMoneyBillAlt size={18} />
                    </div>
                    <h1 className="text-sm">
                      UGX {query.data.charge_per_month} / Per month
                    </h1>
                  </div>
                </div>
                <div className="flex flex-col flex-1 mb-4 flex-grow">
                  <div className="flex flex-row w-full">
                    <div className="p-4 mr-3 bg-gray-300 flex items-center justify-center rounded-md">
                      <BiBed size={18} />
                    </div>
                    <h1 className="text-sm">
                      {query.data.number_of_bedrooms} bedrooms
                    </h1>
                  </div>
                </div>
                <div className="flex flex-col flex-1 mb-4 flex-grow">
                  <div className="flex flex-row w-full">
                    <div className="p-4 mr-3 bg-gray-300 flex items-center justify-center rounded-md">
                      <FaToilet size={18} />
                    </div>
                    {query.data.is_toilet_indoor ? (
                      <h1 className="text-sm">Indoor toilet</h1>
                    ) : (
                      <h1 className="text-sm">Outdoor toilet</h1>
                    )}
                  </div>
                </div>
                <div className="flex flex-col flex-1 mb-4 flex-grow">
                  <div className="flex flex-row w-full">
                    <div className="p-4 mr-3 bg-gray-300 flex items-center justify-center rounded-md">
                      <BiBath size={18} />
                    </div>
                    {query.data.is_bathroom_indoor ? (
                      <h1 className="text-sm">Indoor bathroom</h1>
                    ) : (
                      <h1 className="text-sm">Outdoor bathroom</h1>
                    )}
                  </div>
                </div>
                <div className="flex flex-col flex-1 mb-4 flex-grow">
                  <div className="flex flex-row w-full">
                    <div className="p-4 mr-3 bg-gray-300 flex items-center justify-center rounded-md">
                      <MdOutlinePower size={18} />
                    </div>
                    <h1 className="text-sm">
                      {query.data.power_charge_type} for electricity charges
                    </h1>
                  </div>
                </div>

                <div className="w-full h-[0.5px] bg-gray-300" />

                <h1 className="text-lg font-semibold my-5">Amenities</h1>

                <div className="flex flex-col flex-1 mb-4 flex-grow">
                  <div className="flex flex-row w-full flex-wrap">
                    {query.data?.ammenities?.map((item: any) => {
                      switch (item.name) {
                        case "Wifi":
                          return (
                            <div
                              key={item.id}
                              title={item.name}
                              className="p-3 mr-5 bg-gray-300 flex items-center justify-center rounded-full"
                            >
                              <AiOutlineWifi size={28} />
                            </div>
                          );
                        case "Gym":
                          return (
                            <div
                              key={item.id}
                              title="Gym"
                              className="p-3 mr-5 bg-gray-300 flex items-center justify-center rounded-full"
                            >
                              <CgGym size={28} />
                            </div>
                          );
                        case "Washing Machine":
                          return (
                            <div
                              key={item.id}
                              title="Washing Machine"
                              className="p-3 mr-5 bg-gray-300 flex items-center justify-center rounded-full"
                            >
                              <MdOutlineLocalLaundryService size={28} />
                            </div>
                          );
                        // close switch
                        default:
                          return (
                            <div
                              key={item.id}
                              title={item.name}
                              className="p-3 mr-5 bg-gray-300 flex items-center justify-center rounded-full"
                            >
                              <FiMoreVertical size={30} />
                            </div>
                          );
                      }
                    })}
                  </div>
                </div>

                <div className="w-full h-[0.5px] bg-gray-300" />

                <h1 className="text-lg font-semibold my-5">Tenant spaces</h1>

                <div className="flex flex-col flex-1 mb-4 flex-grow">
                  <div className="flex flex-row w-full flex-wrap">
                    {query.data?.spaces?.map((item: any) => {
                      switch (item.name) {
                        case "Fencing":
                          return (
                            <div
                              key={item.id}
                              title={item.name}
                              className="p-3 mr-5 bg-gray-300 flex items-center justify-center rounded-full"
                            >
                              <GiBrickWall size={28} />
                            </div>
                          );
                        case "Parking":
                          return (
                            <div
                              key={item.id}
                              title="Parking"
                              className="p-3 mr-5 bg-gray-300 flex items-center justify-center rounded-full"
                            >
                              <RiParkingLine size={30} />
                            </div>
                          );
                        case "Washing Machine":
                          return (
                            <div
                              key={item.id}
                              title="Washing Machine"
                              className="p-3 mr-5 bg-gray-300 flex items-center justify-center rounded-full"
                            >
                              <MdOutlineLocalLaundryService size={28} />
                            </div>
                          );
                        // close switch
                        default:
                          return (
                            <div
                              key={item.id}
                              title={item.name}
                              className="p-3 mr-5 bg-gray-300 flex items-center justify-center rounded-full"
                            >
                              <FiMoreVertical size={30} />
                            </div>
                          );
                      }
                    })}
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default DashboardUnitDetails;
