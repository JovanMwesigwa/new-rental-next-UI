import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { APIURL } from "../APIRoute/APIRoute";
import {
  removeProperty,
  setProperty,
} from "../features/editingProperty/editingPropertySlice";

interface Props {
  moveOn: any;
  routeName: string;
}

const PropertyRooms: React.FC<Props> = ({ moveOn, routeName }) => {
  const { property } = useSelector((state: any) => state.editingProperty);
  const { token } = useSelector((state: any) => state.token);

  const [bedrooms, setBedrooms] = useState<number>(1);

  const dispatch = useDispatch();

  const handleSubmit = async () => {
    const data = {
      number_of_bedrooms: bedrooms,
    };
    try {
      const res = await axios
        .put(`${APIURL}/property/update/${property.id}/`, data, {
          headers: {
            Authorization: "Token " + token,
          },
        })
        .then(res => {
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
          Specify the number of bedrooms each units has
        </h1>
        <h3 className=" text-sm text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s
        </h3>

        <div className="flex flex-col my-10">
          <div className="flex flex-1">
            <h3 className=" text-sm text-gray-600">
              How many bedrooms does each unit have?
            </h3>
          </div>
          <div className="flex flex-1 flex-row ">
            <input
              type="number"
              className="outline-none border-2 p-2 rounded-md w-1/2"
              value={bedrooms}
              onChange={e => setBedrooms(Number(e.target.value))}
            />
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

export default PropertyRooms;
