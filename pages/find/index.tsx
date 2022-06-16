import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import {
  FindLeftSidebarComponent,
  FindNavbarComponent,
  PropertyCardComponent,
} from "../../components";
import { useQuery } from "react-query";
import { APIURL } from "../../APIRoute/APIRoute";
import { AiOutlineArrowLeft, AiOutlineClose } from "react-icons/ai";
import { GiSettingsKnobs } from "react-icons/gi";
import { BiSortDown } from "react-icons/bi";
import { FaMapMarked } from "react-icons/fa";

const Find: React.FC<any> = () => {
  const [priceValue, setPriceValue] = useState<any>(100000);

  const { token } = useSelector((state: any) => state.token);

  const getProperties = async () => {
    try {
      const result = await axios.get(`${APIURL}/property/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      return await result.data;
    } catch (error) {
      console.log(error);
    }
  };

  const query = useQuery("findProperties", getProperties);

  if (query.isError)
    return (
      <div className="flex flex-1 items-center justify-center">
        <p>We could not process your request</p>
      </div>
    );

  return (
    <div className="flex flex-col flex-1 relative">
      <FindNavbarComponent />

      <div className=" flex md:hidden h-20 w-full flex-row items-center px-4 fixed top-0 bg-white z-20 ">
        <div className=" flex flex-1 flex-row items-center justify-between px-4 z-20 shadow-md">
          <AiOutlineArrowLeft />
          <input
            className="w-full rounded-md px-4 py-2  outline-none "
            type="text"
            placeholder="Find omie cribs near you"
          />
          <AiOutlineClose />
        </div>
      </div>

      {query.isLoading ? (
        <div>
          <h1>Finding omies...</h1>
        </div>
      ) : query.isError || !query.data ? (
        <div className="flex flex-1 items-center justify-center mt-28">
          <h3>OOps! we could not find any properties</h3>
        </div>
      ) : (
        <div className="flex flex-row flex-1 mt-20 md:mt-24">
          {/* left side bar */}
          <FindLeftSidebarComponent
            priceValue={priceValue}
            setPriceValue={setPriceValue}
          />

          <div className=" hidden lg:flex flex-col w-full h-full md:w-1/4 " />
          {/* right side bar */}
          <div className="flex flex-col flex-1 p-4 md:p-8 md:ml-1/4">
            {/* header */}

            <div className="flex h-10 mb-3 flex-row justify-between w-full md:h-20 items-center md:border-b-[0.4px] md:border-gray-200">
              <h1 className="text-lg md:text-xl font-bold leading-9 text-[#3f3e3e]">
                {query?.data?.count} cribs in Kireka-Kampala
              </h1>
              <div className=" hidden md:flex flex-row items-center">
                {/* create a sort by drop down menu */}
                <select className="w-full h-10 px-4 my-8 bg-gray-200 rounded-sm outline-none">
                  <option className="p-4" value="">
                    Sort by
                  </option>
                  <option className="p-4" value="">
                    Price Low to High
                  </option>
                  <option className="p-4" value="">
                    Price High to Low
                  </option>
                  <option className="p-4" value="">
                    Popularity
                  </option>
                  <option className="p-4" value="">
                    Tenant ratings
                  </option>
                </select>
              </div>
            </div>
            {/* result cards */}
            {query.data.results.map((property: any, index: number) => {
              if (index === 1) {
                return (
                  <div className="md:hidden w-full h-32 p-4 flex flex-row items-center justify-between my-4 rounded-md bg-black">
                    <div className="h-16 w-16 rounded-full bg-red-600" />
                    <div className="flex flex-col flex-1">
                      <p className="text-[#e7e4e4] text-sm px-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                      </p>
                    </div>
                    <div className="flex items-center justify-center">
                      <button className="text-white text-sm px-4 py-2 rounded-md bg-blue-600">
                        Get App
                      </button>
                    </div>
                  </div>
                );
              }
              return (
                <PropertyCardComponent key={property.id} item={property} />
              );
            })}
          </div>
        </div>
      )}
      <div className="flex lg:hidden flex-row bg-black h-10 mx-4 rounded-sm fixed bottom-6 left-0 right-0 flex-1 items-center justify-around z-40">
        <div className="flex flex-row items-center justify-center">
          <GiSettingsKnobs color="#fff" />
          <p className="text-white font-light ml-2 text-sm">Filter</p>
        </div>
        <div className="flex flex-row items-center justify-center">
          <BiSortDown color="#fff" />
          <p className="text-white font-light ml-2 text-sm">Sort</p>
        </div>
        <div className="flex flex-row items-center justify-center">
          <FaMapMarked color="#fff" />
          <p className="text-white font-light ml-2 text-sm">Map</p>
        </div>
      </div>
    </div>
  );
};

export default Find;
