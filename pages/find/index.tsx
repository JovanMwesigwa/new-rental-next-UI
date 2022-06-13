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

  console.log("DEBUG HERE --------------", query);

  if (query.isError)
    return (
      <div className="flex flex-1 items-center justify-center">
        <p>We could not process your request</p>
      </div>
    );

  return (
    <div className="flex flex-col flex-1 relative">
      <FindNavbarComponent />

      {query.isLoading ? (
        <div>
          <h1>Finding omies...</h1>
        </div>
      ) : (
        <div className="flex flex-row flex-1 mt-24">
          {/* left side bar */}
          <FindLeftSidebarComponent
            priceValue={priceValue}
            setPriceValue={setPriceValue}
          />

          <div className="flex flex-col h-full w-1/4 " />
          {/* right side bar */}
          <div className="flex flex-col flex-1 p-8 ml-1/4">
            {/* header */}

            <div className="flex flex-row justify-between w-full h-20 items-center border-b-[0.4px] border-gray-200">
              <h1 className="text-xl font-bold leading-9 text-[#3f3e3e]">
                {query.data.count} cribs in Kireka-Kampala
              </h1>
              <div className="flex flex-row items-center">
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
            {query.data.results.map((property: any) => (
              <PropertyCardComponent key={property.id} item={property} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Find;
