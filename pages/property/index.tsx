import Image from "next/image";
import { AiFillStar, AiOutlinePlus, AiTwotoneDollar } from "react-icons/ai";
import { BsCheck2Circle, BsStarFill, BsWifi } from "react-icons/bs";
import { CgGym, CgScreen } from "react-icons/cg";
import { FaRegBuilding } from "react-icons/fa";
import axios from "axios";
import { GiBrickWall } from "react-icons/gi";
import {
  MdOutlineAir,
  MdOutlineBathtub,
  MdOutlineBed,
  MdOutlineLocalLaundryService,
} from "react-icons/md";
import { RiParkingBoxLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import HorizontalScroll from "react-scroll-horizontal";

import { FindNavbarComponent, PayCardSummaryComponent } from "../../components";
import { useQuery } from "react-query";
import { APIURL } from "../../APIRoute/APIRoute";

const Property: React.FC<any> = () => {
  const { token } = useSelector((state: any) => state.token);

  const getProperty = async () => {
    try {
      const result = await axios.get(`${APIURL}/property/detail/35/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      return await result.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getPropertyImages = async () => {
    try {
      const result = await axios.get(
        `${APIURL}/property/get_all_property_images/36/`,
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

  const query = useQuery("findProperty", getProperty);
  const queryPropertyImages = useQuery("findPropertyImages", getPropertyImages);

  if (query.isError || queryPropertyImages.isError)
    return (
      <div className="flex flex-1 items-center justify-center">
        <p>We could not process your request</p>
      </div>
    );

  // console.log("DEBUG HERE ------------------", query.data);
  return (
    <div className="flex flex-col flex-1 relative mb-20 lg:mb-0">
      <FindNavbarComponent />
      {query.isLoading || queryPropertyImages.isLoading ? (
        <div>
          <h1>Finding omies...</h1>
        </div>
      ) : (
        <>
          <div style={{ width: "100%", height: 500 }}>
            <HorizontalScroll>
              {queryPropertyImages.data.results.map((image: any) => (
                <div
                  key={image.id}
                  title="front image"
                  className="flex flex-col w-[580px] h-full bg-gray-200 border-r-4 cursor-pointer border-white relative"
                >
                  <Image src={image.image} layout="fill" />
                </div>
              ))}
            </HorizontalScroll>
          </div>
          <div className="flex flex-1 flex-col md:flex-row p-4 md:p-8 relative md:mr-4">
            <div className="flex flex-col w-full md:mr-4">
              {/* Heading */}
              <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                  <h1 className="text-xl md:text-3xl font-bold leading-9 text-[#201f1f]">
                    {query.data.title}
                  </h1>
                  <p className="w-full md:w-2/3 text-sm text-gray-500">
                    Sector 26, Sector 26,Dwarka, Kapashera Tehsil, South West
                    Delhi, Delhi, India, Delhi
                  </p>
                </div>
                <div className="flex flex-col md:py-5 bg-green-600 h-8 px-3 md:px-0 md:h-10 rounded-sm items-center justify-center">
                  <h1 className="text-sm md:text-xl font-bold leading-9 text-white">
                    4.5
                  </h1>
                  {/* <BsStarFill color="#fff" size={32} /> */}
                </div>
              </div>
              <div className="flex flex-col w-full mt-5">
                <h1 className="text-base md:text-base font-bold text-[#201f1f]">
                  About property
                </h1>
                <p className="text-sm text-gray-600">
                  {query.data.description}
                </p>
              </div>
              {/* Crib structure */}
              <div className="flex flex-col mt-4 md:mt-10 w-full">
                <h1 className="text-base md:text-2xl font-bold leading-9 text-[#201f1f]">
                  What you get
                </h1>
                <div className="flex  flex-wrap flex-1 flex-col md:py-4 w-full justify-between">
                  {/* card */}
                  <div className="flex flex-row items-center mb-8">
                    <MdOutlineBed size={24} />
                    <h1 className="text-base md:text-lg mx-2 md:mx-4">
                      {query.data.number_of_bedrooms} bedrooms
                    </h1>
                  </div>
                </div>
              </div>
              {/* Utils*/}
              <div className="flex flex-col w-full">
                <h1 className="text-base md:text-2xl font-bold leading-9 text-[#201f1f]">
                  Crib utilities
                </h1>
                <div className="flex  flex-wrap flex-1 flex-col md:py-4 w-full justify-between">
                  {/* card */}
                  {query.data.is_bathroom_indoor ? (
                    <div className="flex flex-row items-center mb-4 md:mb-8">
                      <BsCheck2Circle size={24} />
                      <h1 className="text-base md:text-lg mx-2 md:mx-4">
                        Indoor bathroom
                      </h1>
                    </div>
                  ) : (
                    <div className="flex flex-row items-center mb-4 md:mb-8">
                      <BsCheck2Circle size={24} />
                      <h1 className="text-base md:text-lg mx-2 md:mx-4">
                        Outdoor bathroom
                      </h1>
                    </div>
                  )}

                  {/* card */}
                  {query.data.is_toilet_indoor ? (
                    <div className="flex flex-row items-center mb-4 md:mb-8">
                      <BsCheck2Circle size={24} />
                      <h1 className="text-base md:text-lg mx-2 md:mx-4">
                        Indoor toilet
                      </h1>
                    </div>
                  ) : (
                    <div className="flex flex-row items-center mb-4 md:mb-8">
                      <BsCheck2Circle size={24} />
                      <h1 className="text-base md:text-lg mx-2 md:mx-4">
                        Outdoor toilet
                      </h1>
                    </div>
                  )}

                  {/* card */}
                  <div className="flex flex-row items-center mb-4 md:mb-8">
                    <BsCheck2Circle size={24} />
                    <h1 className="text-base md:text-lg mx-2 md:mx-4">
                      {query.data.power_charge_type} power
                    </h1>
                  </div>
                  {/* card */}
                  <div className="flex flex-row items-center mb-4 md:mb-8">
                    <BsCheck2Circle size={24} />
                    <h1 className="text-base md:text-lg mx-2 md:mx-4">
                      gabbage collection
                    </h1>
                  </div>
                </div>
              </div>
              {/* Amenities*/}
              <div className="flex flex-col w-2/3">
                <h1 className="text-base md:text-2xl font-bold leading-9 text-[#201f1f]">
                  Amenities
                </h1>
                <div className="flex  flex-wrap flex-1 flex-row md:py-4 w-full">
                  {query.data.ammenities.map((ammenity: any) => {
                    switch (ammenity.name) {
                      case "Wifi":
                        return (
                          <div
                            key={ammenity.id}
                            title={ammenity.name}
                            className="flex flex-row items-center mb-4 md:mb-8 md:mr-8"
                          >
                            <BsWifi size={24} />
                            <h1 className="text-lg mx-4">Wifi</h1>
                          </div>
                        );
                      case "Gym":
                        return (
                          <div
                            key={ammenity.id}
                            title={ammenity.name}
                            className="flex flex-row items-center mb-4 md:mb-8 md:mr-8"
                          >
                            <CgGym size={28} />
                            <h1 className="text-base md:text-lg mx-2 md:mx-4">
                              Gym
                            </h1>
                          </div>
                        );
                      case "Washing Machine":
                        return (
                          <div
                            key={ammenity.id}
                            title={ammenity.name}
                            className="flex flex-row items-center mb-4 md:mb-8 md:mr-8"
                          >
                            <MdOutlineLocalLaundryService size={28} />
                            <h1 className="text-base md:text-lg mx-2 md:mx-4">
                              Laundry
                            </h1>
                          </div>
                        );
                      // close switch
                      default:
                        return (
                          <div
                            key={ammenity.id}
                            title={ammenity.name}
                            className="flex flex-row items-center mb-4 md:mb-8 md:mr-8"
                          >
                            <BsCheck2Circle size={22} color="#1d1d1d" />
                            <h1 className="text-base md:text-lg mx-2 md:mx-4">
                              {ammenity.name}
                            </h1>
                          </div>
                        );
                    }
                  })}
                </div>
              </div>
              {/* Photos*/}
              <div className="flex flex-col w-2/3">
                <h1 className="text-xl font-bold leading-9 text-[#201f1f]">
                  Property photos
                </h1>
                <div className="flex flex-1 flex-row py-4 w-full">
                  {/* images */}
                  <div className="h-24 w-24 bg-gray-200 cursor-pointer rounded-sm relative overflow-hidden bg-transparent">
                    <Image src="/assets/images/home1.jpg" layout="fill" />
                  </div>
                  {/* images */}
                  <div className="h-24 w-24 bg-gray-200 mx-4 cursor-pointer rounded-sm relative overflow-hidden bg-transparent">
                    <div className="absolute bottom-0 right-0 top-0 left-0 flex flex-col items-center justify-center bg-black">
                      <h1 className="text-lg text-white">
                        +{queryPropertyImages.data.count}
                      </h1>
                      <h1 className="text-xs text-white">see more</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <PayCardSummaryComponent property={query.data} />
          </div>
        </>
      )}
      <div className="flex lg:hidden flex-row w-full h-20 bg-white fixed bottom-0 z-20 py-2">
        <div className="flex flex-col justify-center px-3">
          <h1 className="text-base font-bold ">
            UGX {query.data?.charge_per_month?.toLocaleString()}
          </h1>
          <p className="text-xs text-gray-500">paid per month</p>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center pr-2">
          <button className="flex flex-col w-full h-full items-center justify-center text-white bg-red-600 rounded-md  px-4 py-2">
            <p className="text-base">Book now</p>{" "}
            <p className="text-xs font-light">
              & pay when you meet the landlord
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Property;
