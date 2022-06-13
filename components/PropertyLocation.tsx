import { ImLocation } from "react-icons/im";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { APIURL } from "../APIRoute/APIRoute";
import axios from "axios";
import {
  removeProperty,
  setProperty,
} from "../features/editingProperty/editingPropertySlice";

interface Props {
  moveOn: any;
  routeName: string;
}

const PropertyLocation: React.FC<Props> = ({ moveOn, routeName }) => {
  const [country, setCountry] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [street, setStreet] = useState<string>("");
  const [zip, setZip] = useState<string>("");

  const { property } = useSelector((state: any) => state.editingProperty);
  const { token } = useSelector((state: any) => state.token);

  const dispatch = useDispatch();

  const handleSubmit = async () => {
    const data = {
      property_listing: property.id,
      country: country,
      city: city,
      street: street,
      zip_code: parseInt(zip),
    };

    try {
      const res = await axios
        .post(`${APIURL}/property/address/`, data, {
          headers: {
            Authorization: "Token " + token,
          },
        })
        .then(async res => {
          await updateProperty(res.data.id);
        })
        .catch(err => {
          console.log(err);
        });
    } catch (err: any) {
      console.log(err.message);
    }
  };

  const updateProperty = async (addressID: any) => {
    // console.log("DEBUG HERE --------------------", addressID); 

    const data = {
      address: addressID,
    };
    try {
      const res = await axios
        .put(`${APIURL}/property/update/${property.id}/`, data, {
          headers: {
            Authorization: "Token " + token,
          },
        })
        .then(res => {
          // console.log("DEBUG HERE --------------------", res.data);
          dispatch(removeProperty());
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
    <div className="w-1/2">
      <div className="py-10">
        <h1 className="text-xl w-2/3 tracking-wide text-black font-semibold">
          Where is your place located?
        </h1>
        <h3 className=" text-sm text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard
        </h3>

        <div className="border-2 w-1/3 rounded-md cursor-pointer p-1 my-2 flex flex-row  items-center px-3">
          <ImLocation />
          <h1 className="text-sm mx-2">Use current location</h1>
        </div>

        <div className="flex flex-col">
          <div className="my-2">
            <div className="flex flex-1">
              <h3 className=" text-sm text-gray-600">Country / Region</h3>
            </div>
            <div className="flex flex-1 flex-row ">
              <input
                className="outline-none border-2 p-2 rounded-md w-full"
                value={country}
                onChange={(e: any) => setCountry(e.target.value)}
              />
            </div>
          </div>

          <div className="my-3">
            <div className="flex flex-1">
              <h3 className=" text-sm text-gray-600">Street</h3>
            </div>
            <div className="flex flex-1 flex-row ">
              <input
                className="outline-none border-2 p-2 rounded-md w-full"
                value={street}
                onChange={(e: any) => setStreet(e.target.value)}
              />
            </div>
          </div>

          <div className="my-3">
            <div className="flex flex-row">
              <div className="flex flex-1 flex-col mr-4">
                <div className="flex flex-1">
                  <h3 className=" text-sm text-gray-600">City</h3>
                </div>
                <div className="flex flex-1 flex-row ">
                  <input
                    className="outline-none border-2 p-2 rounded-md w-full"
                    value={city}
                    onChange={(e: any) => setCity(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col">
                <div className="flex flex-1">
                  <h3 className=" text-sm text-gray-600">Zip Code</h3>
                </div>
                <div className="flex flex-1 flex-row ">
                  <input
                    className="outline-none border-2 p-2 rounded-md w-full"
                    value={zip}
                    onChange={(e: any) => setZip(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-1 w-full flex-row items-center justify-between">
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

export default PropertyLocation;
