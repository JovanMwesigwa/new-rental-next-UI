import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";
import axios from "axios";
import { CgGym } from "react-icons/cg";
import { FaParking } from "react-icons/fa";
import { MdOutlineLocalLaundryService } from "react-icons/md";
import { useSelector } from "react-redux";
import { APIURL } from "../APIRoute/APIRoute";
import { useQuery } from "react-query";
import LoadingImagesComponent from "./LoadingImagesComponent";
import PropertyImagesGridComponent from "./PropertyImagesGridComponent";

interface Props {
  item: any;
}

const PropertyCardComponent: React.FC<Props> = ({ item }) => {
  const { token } = useSelector((state: any) => state.token);

  const getPropertyFirstImages = async () => {
    try {
      const result = await axios.get(
        `${APIURL}/property/list_front_images/${item.id}/`,
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

  const getPropertyOtherImages = async () => {
    try {
      const result = await axios.get(
        `${APIURL}/property/list_other_images/${item.id}/`,
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

  const queryFrontImages = useQuery(
    ["propertyFrontImages", item.id],
    getPropertyFirstImages
  );

  const queryOtherImages = useQuery(
    ["propertyOtherImages", item.id],
    getPropertyOtherImages
  );

  console.log("DEBUG HERE ------------------------", queryFrontImages);

  return (
    <div className="flex flex-row w-full h-72  my-10">
      {/* Images */}
      {queryFrontImages.isLoading && queryOtherImages.isLoading ? (
        <LoadingImagesComponent />
      ) : (
        !queryFrontImages.isError &&
        !queryOtherImages.isError && (
          <PropertyImagesGridComponent
            frontImages={queryFrontImages.data.results}
            otherImages={queryOtherImages?.data?.results}
          />
        )
      )}

      <div className="flex flex-col w-1/2 h-full pl-5">
        <div className="flex flex-col">
          <h1 className="text-xl font-bold leading-1 text-[#1d1d1d]">
            {item.title ? item.title : "Omie crib"}
          </h1>
          <h5 className="font-normal text-base text-[#1d1d1d]">
            Bweyogere - Kampala - Uganda
          </h5>
          <h5 className="font-sm text-base text-[#1d1d1d]">
            {item.property_type}
          </h5>
        </div>
        <div className="flex flex-1 flex-col justify-center">
          {/* rating and status row */}
          <div className="flex flex-col justify-between">
            <div className="flex flex-row items-center">
              <p className="text-white bg-[#40ea4f] p-1 rounded-sm px-2 text-sm">
                NEW
              </p>
              <p className="text-white font-medium bg-green-500 p-1 mx-4 rounded-sm px-2 text-sm">
                4.5 *
              </p>
            </div>

            <div className="flex flex-row items-center py-4">
              {item.ammenities.map((ammenity: any) => {
                switch (ammenity.name) {
                  case "Wifi":
                    return (
                      <div
                        key={ammenity.id}
                        title={ammenity.name}
                        className="flex flex-row items-center mr-4"
                      >
                        <MdOutlineLocalLaundryService
                          size={30}
                          color="#1d1d1d"
                        />
                        <p className="font-normal text-base text-[#1d1d1d] mx-2">
                          Free Wifi
                        </p>
                      </div>
                    );
                  case "Gym":
                    return (
                      <div
                        key={ammenity.id}
                        title={ammenity.name}
                        className="flex flex-row items-center mr-4"
                      >
                        <CgGym size={28} />
                        <p className="font-normal text-base text-[#1d1d1d] mx-2">
                          Gym
                        </p>
                      </div>
                    );
                  case "Washing Machine":
                    return (
                      <div
                        key={ammenity.id}
                        title={ammenity.name}
                        className="flex flex-row items-center mr-4"
                      >
                        <MdOutlineLocalLaundryService size={28} />
                        <p className="font-normal text-base text-[#1d1d1d] mx-2">
                          Laundry
                        </p>
                      </div>
                    );
                  // close switch
                  default:
                    return (
                      <div
                        key={ammenity.id}
                        title={ammenity.name}
                        className="flex flex-row items-center mr-4"
                      >
                        <AiOutlinePlus size={22} color="#1d1d1d" />
                        <p className="font-normal text-base text-[#1d1d1d] mx-2">
                          16 more
                        </p>
                      </div>
                    );
                }
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col flex-1">
            <h1 className="text-2xl font-medium leading-1 text-red-600">
              UGX {item.charge_per_month.toLocaleString()}
            </h1>
            <p className="text-sm text-gray-500">paid per month</p>
          </div>
          <div className="flex flex-row flex-1">
            <button className="border-2 border-gray-600 text-gray-600  w-full py-1 rounded-sm mr-4">
              View Details
            </button>
            <button className="bg-green-500 font-medium  py-1 w-full rounded-sm text-white">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCardComponent;
