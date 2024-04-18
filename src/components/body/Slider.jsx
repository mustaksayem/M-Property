import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Done
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <div className='mt-8 '>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper relative'>
          <div className="z-50 absolute top-10 text-black left-1/2 transform -translate-x-1/2">
            <p className="font-bold text-4xl mb-5">Search properties for sale or rent</p>
            <p><label className="input input-bordered flex items-center gap-2">
  <input type="text" className="grow" placeholder="Search" />
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
</label></p>
          </div>
        <SwiperSlide>
          <img
            className='lg:h-[calc(100vh-130px)] w-auto lg:w-full rounded-2xl '
            src='https://i.ibb.co/Sf6jLnP/5.jpg'
            alt='Slider-1'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className='lg:h-[calc(100vh-130px)] w-auto lg:w-full rounded-2xl'
            src='https://i.ibb.co/r0qTtVk/slider-2.jpg'
            alt='Slider-2'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className='lg:h-[calc(100vh-130px)] w-auto lg:w-full rounded-2xl'
            src='https://i.ibb.co/bJmLn2r/sslide-03.jpg'
            alt='Slider-3'
          />
         
        </SwiperSlide>
        <SwiperSlide>
          <img
            className='lg:h-[calc(100vh-130px)] w-auto lg:w-full rounded-2xl'
            src='https://i.ibb.co/WcmLjdS/slider-4.jpg'
            alt='Slider-4'
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
