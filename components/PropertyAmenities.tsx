import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { APIURL } from "../APIRoute/APIRoute";
import {
  removeProperty,
  setProperty,
} from "../features/editingProperty/editingPropertySlice";

interface Props {
  moveOn: any;
  routeName: string;
}

const PropertyAmenities: React.FC<Props> = ({ moveOn, routeName }) => {
  const [ammenities, setAmmenities] = useState<string[]>([]);

  const [selected, setSelected] = useState<any>([]);

  const { property } = useSelector((state: any) => state.editingProperty);
  const { token } = useSelector((state: any) => state.token);

  const dispatch = useDispatch();

  useEffect(() => {
    getAmmenities();
  }, [selected]);

  const getAmmenities = async () => {
    try {
      const result = await axios
        .get(`${APIURL}/property/ammenities/`)
        .then(res => {
          setAmmenities(res.data.results);
        })
        .catch((err: any) => {
          console.log(err);
        });
    } catch (err: any) {
      console.log(err.message);
    }
  };

  const selectAmmenity = (selectedAmmenity: any) => {
    const isSelected = selected.some((item: any) => {
      return item.id === selectedAmmenity.id;
    });
    // see if its already selected
    if (isSelected) {
      // remove it from the array
      const removed = selected.filter((item: any) => {
        return item.id !== selectedAmmenity.id;
      });
      // set the state
      setSelected(removed);
    } else {
      // add it to the array
      setSelected((prevState: any) => [...prevState, selectedAmmenity]);
    }
  };

  const checkIfSelected = (item: any) => {
    return selected.some((selectedItem: any) => selectedItem.id === item.id);
  };

  const setPropertyAmmenities = async () => {
    const data = {
      ammenities: selected,
    };
    try {
      const res = await axios
        .post(`${APIURL}/property/add_ammenities/${property.id}/`, data, {
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
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div className="w-1/2">
      <div className="py-10">
        <h1 className="text-xl w-2/3 tracking-wide text-black font-semibold">
          What amenities do you offer?
        </h1>
        <h3 className=" text-sm text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s
        </h3>

        <div className="flex flex-1 flex-row my-10">
          <div className="flex flex-1 flex-row  flex-wrap">
            {ammenities.map((item: any) => (
              <>
                <button
                  onClick={() => selectAmmenity(item)}
                  className={`border-2 m-2 flex flex-row relative ${
                    checkIfSelected(item) && "bg-black text-white"
                  } mr-3 px-4 p-2 rounded-full`}
                >
                  <h1 className="mr-1">{item.name}</h1>
                  {checkIfSelected(item) && <AiOutlineClose size={10} />}
                </button>
              </>
            ))}
          </div>
        </div>
        {/* <p className='bg-black text-white p-2 text-xs rounded-sm w-1/2'>Tenants pay for their own power using YAKA</p> */}
      </div>

      <div className="flex flex-1 w-full flex-row items-center justify-between">
        <Link href="/host">
          <div className="flex flex-row items-center cursor-pointer">
            <IoIosArrowBack size={20} />
            <h2 className="text-lg mx-3">Back</h2>
          </div>
        </Link>

        <div
          onClick={setPropertyAmmenities}
          // onClick={() => moveOn(routeName)}
          className="flex flex-row items-center cursor-pointer bg-black text-white px-5 py-2 rounded-md"
        >
          <h2 className="text-lg mx-3">Next</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyAmenities;
