import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { APIURL } from "../APIRoute/APIRoute";
import { setProperty } from "../features/editingProperty/editingPropertySlice";

interface Props {
  moveOn?: any;
  routeName?: string;
}

const PropertyTypeSection: React.FC<Props> = ({ moveOn, routeName }) => {
  const [propertyType, setPropertyType] = useState<string>("Rentals");

  const [error, setError] = useState<string>("");

  const dispatch = useDispatch();

  const handlePropertyType = (e: any) => {
    setPropertyType(e.target.value);
  };

  const handleSubmit = async () => {
    const data = {
      property_type: propertyType,
    };
    try {
      const res = await axios
        .post(`${APIURL}/property/create/`, data, {
          headers: {
            Authorization: "Token " + localStorage.getItem("token"),
          },
        })
        .then(res => {
          console.log("DEBUG HERE ===========", res.data);
          dispatch(setProperty(res.data));
          moveOn(routeName);
        })
        .catch(err => {
          console.log(err);
        });
    } catch (err: any) {
      console.log(err.message);
    }
  };
  return (
    <div className="flex flex-col items-center justify-between w-full h-full">
      <div className="flex flex-1"></div>
      <div className="py-10 flex flex-1 flex-col flex-grow">
        <h1 className="text-xl tracking-wide text-black font-semibold">
          What kind of property are you listing?
        </h1>

        <div className="flex flex-col my-4">
          <label className="text-base my-2 text-gray-700 mt-4">
            Choose a property type
          </label>
          <select
            className="p-3 border-2 rounded-md outline-none"
            placeholder="Select one"
            name="property type"
            id="property"
            value={propertyType}
            onChange={handlePropertyType}
          >
            <option value="Rentals">Rentals</option>
            <option value="Apartments">Apartments</option>
            <option value="Hostels">Hostels</option>
            <option value="Office">Office</option>
            <option value="Shops">Shops</option>
          </select>
        </div>
      </div>

      <div className="flex flex-1 w-1/2 flex-row items-center justify-between">
        <Link href="/host">
          <div className="flex flex-row items-center cursor-pointer">
            <IoIosArrowBack size={20} />
            <h2 className="text-lg mx-3">Back</h2>
          </div>
        </Link>

        <div
          onClick={handleSubmit}
          className="flex flex-row items-center cursor-pointer bg-black text-white px-5 py-2 rounded-md"
        >
          <h2 className="text-lg mx-3">Next</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyTypeSection;
