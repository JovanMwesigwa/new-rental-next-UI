import type { NextPage } from "next";
import Head from "next/head";
import "mapbox-gl/dist/mapbox-gl.css";
import TextTransition, { presets } from "react-text-transition";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Zoom,
  Lazy,
  FreeMode,
} from "swiper";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/zoom";
import "swiper/css/lazy";
import "swiper/css/free-mode";
import axios from "axios";
import { NavbarComponent, WorkTabComponent } from "../components/";
import Image from "next/image";

import hostel1 from "../public/assets/images/hostel1.jpg";
import hostel2 from "../public/assets/images/hostel2.jpg";
import home1 from "../public/assets/images/home1.jpg";
import home2 from "../public/assets/images/home2.jpg";
import home3 from "../public/assets/images/home3.jpg";
import home4 from "../public/assets/images/home4.jpg";
import { GoLocation } from "react-icons/go";
import { useEffect, useState } from "react";
import { BsBuilding, BsCalendarDate } from "react-icons/bs";
import { BiGlobeAlt } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { APIURL } from "../APIRoute/APIRoute";
import { useQuery } from "react-query";
import { fetchingUserSuccess } from "../features/user/userSlice";

const FIRST = ["Manage", "Find"];
const SECOND = [" tenants", " hostels", " apartments"];

const Home: NextPage = () => {
  const [index, setIndex] = useState<any>(0);
  const [secondIndex, setSecondIndex] = useState<any>(0);

  const token = useSelector((state: any) => state.token.token);
  const currentUser = useSelector((state: any) => state.user);

  const dispatch = useDispatch();

  const fetchUser = async () => {
    try {
      const result = await axios.get(`${APIURL}/profile/me/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      return await result;
    } catch (error) {
      console.log(error);
    }
  };

  const user = useQuery("fetchUser", fetchUser);

  useEffect(() => {
    const intervalId = setInterval(
      () => {
        setIndex((index: any) => index + 1);
        setSecondIndex((secondIndex: any) => secondIndex + 1);
      },
      3000 // every 3 seconds
    );

    if (user.data?.data || !currentUser?.user) {
      dispatch(fetchingUserSuccess(user?.data?.data));
    }

    return () => clearTimeout(intervalId);
  }, [token, user.data?.data, currentUser?.user]);

  return (
    <div className="relative">
      <Head>
        <title>Omie cribs | Hostels And Rental Homes</title>
        <meta
          name="description"
          content="Manage your tenants, set reminders and keep track of their stay periods."
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v1.10.1/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>

      <NavbarComponent />

      {/* hero section */}
      <section>
        <div className="w-full flex flex-row h-screen mt-16 bg-white p-4">
          <div className="flex flex-1 flex-col px-4  justify-center">
            <div className="flex flex-row">
              <h1 className="text-3xl font-semibold mr-2">Manage your </h1>
              <h1 className="text-3xl font-semibold ">
                <TextTransition
                  text={SECOND[secondIndex % SECOND.length]}
                  springConfig={presets.slow}
                  inline={true}
                />
              </h1>
            </div>
            <p className="leading-5 mt-5">
              Whether you’re looking for a hostel, rental, or you're a landlord
              who wants to manage your tenants
            </p>
            <div className="w-full my-5 flex flex-row items-center">
              {/* <GoLocation size={25} color="#807f7f" /> */}
              <input
                type="text"
                className="w-full h-16 outline-none rounded-md border-2 border-[#807f7f] px-3 "
                placeholder="Find cribs & hostels"
              />
            </div>

            <button className="w-full h-16 bg-red-600 rounded-md text-white">
              Get Started
            </button>
          </div>
          <Swiper
            spaceBetween={35}
            slidesPerView="auto"
            modules={[Autoplay, Zoom, Lazy, FreeMode]}
            onSlideChange={() => console.log("slide change")}
            onSwiper={swiper => console.log(swiper)}
            autoplay={{
              delay: 8000,
              disableOnInteraction: false,
            }}
            loop={true}
            speed={1000}
            navigation
            zoom
            lazy
            freeMode
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            className="w-2/3 h-full"
          >
            <SwiperSlide>
              <div className="h-full w-full relative rounded-md overflow-hidden ml-2 bg-gray-100">
                <Image src={hostel1} layout="fill" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="h-full w-full relative rounded-md overflow-hidden ml-2 bg-gray-100">
                <Image src={home1} layout="fill" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-full w-full relative rounded-md overflow-hidden ml-2 bg-gray-100">
                <Image src={home2} layout="fill" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-full w-full relative rounded-md overflow-hidden ml-2 bg-gray-100">
                <Image src={home4} layout="fill" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-full w-full relative rounded-md overflow-hidden ml-2 bg-gray-100">
                <Image src={home3} layout="fill" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <main>
        <WorkTabComponent />

        <section>
          <div className="w-full flex flex-col p-8">
            <h3 className="text-2xl w-2/3 font-medium mb-5">
              Get the house you need, when and where you need it so you can
              focus on managing other stuff
            </h3>

            <div className="flex flex-1 my-10 flex-row">
              <div className="flex-1 flex-col flex py-8">
                <BsBuilding size={55} color="#605e5e" />
                <div className="flex flex-1 flex-col my-8">
                  <h1 className="text-lg">Places that are close to town</h1>
                  <p className="font-light text-base text-gray-600 w-2/3">
                    Whether you want somewhere in or out of town, we have the
                    perfect crib for you
                  </p>
                </div>
              </div>
              <div className="flex-1 flex-col flex py-8 px-4">
                <BsCalendarDate size={55} color="#605e5e" />
                <div className="flex flex-1 flex-col my-8">
                  <h1 className="text-lg">Rent period durations</h1>
                  <p className="font-light text-base text-gray-600 w-2/3">
                    You can book for the month or semister, in any way that
                    suits you
                  </p>
                </div>
              </div>
              <div className="flex-1 flex-col flex py-8">
                <BiGlobeAlt size={55} color="#605e5e" />
                <div className="flex flex-1 flex-col my-8">
                  <h1 className="text-lg">Fully flexible</h1>
                  <p className="font-light text-base text-gray-600 w-2/3">
                    Shift whenever you feel like, stay wherever you want
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="w-full flex flex-row p-8 items-center mb-8 justify-center">
            <div className="flex flex-1 rounded-md overflow-hidden relative  h-96 ">
              <Image src={hostel2} layout="fill" />
            </div>
            <div className="flex flex-1 flex-col p-4">
              <h1 className="text-2xl font-semibold ">
                One affordable chain of rental management tools
              </h1>
              <p className="text-lg font-light my-5">
                Linking to More Destinations. More Ease. More Affordable.
              </p>
            </div>
          </div>
        </section>

        <footer>
          <div className="w-full h-72 bg-slate-800"></div>
        </footer>
      </main>
    </div>
  );
};

export default Home;
