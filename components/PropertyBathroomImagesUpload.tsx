import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { BsCloudUpload } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { APIURL } from "../APIRoute/APIRoute";
import {
  removeProperty,
  setProperty,
} from "../features/editingProperty/editingPropertySlice";
import Image from "next/image";

interface Props {
  moveOn: any;
  routeName: string;
}

const PropertyBathroomImagesUpload: React.FC<Props> = ({
  moveOn,
  routeName,
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  //   backend fields
  const [image, setImage] = useState<any>("");
  const [pictures, setPictures] = useState<any>([]);
  const [imageFiles, setImageFiles] = useState<any>([]);

  const { property } = useSelector((state: any) => state.editingProperty);
  const { token } = useSelector((state: any) => state.token);

  const dispatch = useDispatch();

  const hiddenFileInput = useRef(null);

  const handleClick = (e: any) => {
    hiddenFileInput?.current?.click();
  };

  useEffect(() => {
    () => {};
  }, [pictures]);

  const onChangePicture = (e: any) => {
    // Here ---->
    setPictures((prevState: any) => [
      ...prevState,
      URL.createObjectURL(e.target.files[0]),
    ]);
    // Here ---->
    setImageFiles((prevState: any) => [...prevState, e.target.files[0]]);
  };

  const removePicture = (item: any) => {
    const isAvailable = pictures.some((pic: any) => {
      return pic === item;
    });

    if (isAvailable) {
      // remove it from the state
      const removed = pictures.filter((pict: any) => {
        return pict !== item;
      });
      setPictures(removed);
      //   setImageFiles()
    } else {
      // onChangePicture();
      console.log("UNKNOWN SELECTION ----------------->");
    }
  };

  const handleSubmit = async () => {
    // e.preventDefault();
    setLoading(true);

    imageFiles.forEach(async (image: any) => {
      const data = new FormData();

      data.append("property_listing", property.property_listing);
      data.append("image", image);
      // data.append('type', values.type);

      try {
        await axios
          .post(
            `${APIURL}/property/add_bathroom_images/${property.property_listing}/`,
            data,
            {
              headers: {
                Authorization: "Token " + token,
              },
            }
          )
          .then((res: any) => {
            dispatch(removeProperty());
            dispatch(setProperty(res.data));
            moveOn(routeName);
          })
          .catch((err: any) => {
            console.log(err);
          });
      } catch (err: any) {
        console.log(err.message);
      }
    });
    setLoading(false);
  };

  return (
    <div className="w-1/2">
      <div className="py-10">
        <h1 className="text-xl w-2/3 tracking-wide text-black font-semibold">
          Upload photos of your units bathroom
        </h1>
        <h3 className=" text-sm text-gray-600">
          Upload atleast one photo of your unit. Lorem Ipsum has been the
          industrys standard dummy text ever since the 1500s
        </h3>
        {loading ? (
          <div className="flex flex-col items-center justify-center">
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <>
            <div className="flex flex-row mt-3">
              {pictures &&
                pictures.map((item: any, index: any) => (
                  <div
                    onClick={() => removePicture(item)}
                    className="h-28 rounded-sm overflow-hidden mr-3 w-28 cursor-pointer hover:opacity-50 flex flex-row relative"
                    key={index}
                  >
                    <Image key={index} src={item} layout="fill" />
                  </div>
                ))}
            </div>
            <div onClick={handleClick} className="flex flex-1 flex-row my-10">
              <input
                name="image"
                type="file"
                className="mx-5 hidden"
                accept="image/*"
                ref={hiddenFileInput}
                // aria-describedby="my-helper-text"
                onChange={onChangePicture}
                onBlur={() => {}}
                value={image}
              />
              <div className="flex items-center justify-center h-52 w-full bg-gray-200 rounded-md">
                <button className="bg-red-500 p-3 px-4 rounded-md text-white flex flex-row items-center">
                  <BsCloudUpload className="mr-4" />
                  Upload photos
                </button>
              </div>
            </div>
          </>
        )}
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

export default PropertyBathroomImagesUpload;
