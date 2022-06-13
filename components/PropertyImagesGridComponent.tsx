import Image from "next/image";
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

interface Props {
  frontImages: any;
  otherImages: any;
}

const PropertyImagesGridComponent: React.FC<Props> = ({
  frontImages,
  otherImages,
}) => {
  // console.log("DBUG HERE ---------------", frontImages);
  return (
    <div className="flex flex-row w-1/2 h-full bg-gray-200">
      <Swiper
        spaceBetween={15}
        slidesPerView="auto"
        modules={[Autoplay, Zoom, Lazy, FreeMode]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={swiper => console.log(swiper)}
        // autoplay={{
        //   delay: 10000,
        //   disableOnInteraction: false,
        // }}
        // loop={true}
        speed={1000}
        navigation
        zoom
        lazy
        freeMode
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="flex flex-col w-full h-full bg-gray-100 cursor-pointer hover:bg-gray-50 relative overflow-hidden rounded-sm"
      >
        {frontImages.map((item: any) => (
          <SwiperSlide key={item.id}>
            <div className="h-full w-full relative rounded-md overflow-hidden ml-2 bg-gray-100">
              <Image src={item.image} layout="fill" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex flex-col w-36 border-l-4  border-white h-full bg-gray-200">
        {/* narrow right container */}
        {otherImages.map((item: any) => (
          <div
            key={item.id}
            className="flex flex-row justify-between w-full h-full rounded-sm bg-gray-100 cursor-pointer overflow-hidden relative hover:bg-gray-50 border-b-4 border-white"
          >
            <Image src={item.image} layout="fill" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyImagesGridComponent;
