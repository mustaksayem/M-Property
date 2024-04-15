import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Done
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <div className='mt-8'>
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
        className='mySwiper'>
        <SwiperSlide>
          <img
            className='lg:h-[calc(100vh-130px)] w-auto lg:w-full rounded-2xl '
            src='https://i.ibb.co/vhrPQSg/slider-2.webp'
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
            src='https://i.ibb.co/09dD3Fk/slider-3.jpg'
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
