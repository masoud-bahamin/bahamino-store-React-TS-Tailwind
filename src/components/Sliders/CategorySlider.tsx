
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Slider.css';

// import required modules
import {  Navigation } from 'swiper/modules';
import { secondData } from '../../Data';
import { CategoriCard } from '../Cards/CategoriCard';


export default function CategorySlider() {


    return (
        <>
            <Swiper
                slidesPerView={1}
                breakpoints={{
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 15,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 15,
                    },
                    968: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                    1224: {
                      slidesPerView: 4,
                      spaceBetween: 20,
                    },
                    1424: {
                      slidesPerView: 5,
                      spaceBetween: 25,
                    },
                  }}
                spaceBetween={15}          
                grabCursor={true}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                {secondData.map((product) => (
                     <SwiperSlide key={product.id} className=' flex-grow'><CategoriCard  {...product} /></SwiperSlide>
                ))}
                
            </Swiper>

         
        </>
    );
}