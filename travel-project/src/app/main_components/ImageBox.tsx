'use client';

import React from 'react';

// Swiper 올바른 import 경로
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Scrollbar, Mousewheel } from 'swiper/modules';

// Swiper 스타일 import
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function ImageBox() {
  return (
    <div className="flex flex-col items-start mx-auto h-full w-full justify-start p-8 bg-gray-100 rounded-lg shadow-md">
      <Swiper
        modules={[Pagination, Mousewheel, Navigation, Scrollbar, A11y]}
        onSwiper={(swiper: any) => {
          // window 객체에 swiper 추가하려면 타입 확장 필요
          (window as any).swiper = swiper;
        }}
        slidesPerView={1.2}
        threshold={2}
        spaceBetween={20}
        navigation={true}
        scrollbar={{ draggable: true }}
        mousewheel={{ 
          forceToAxis: true, 
          sensitivity: 0.1, 
          releaseOnEdges: true 
        }}
        pagination={{ clickable: true }}
        autoplay = {{
          delay: 3000
        }}
        className="w-full h-full"
      >
        <SwiperSlide>
          <div className="bg-white p-4 rounded-lg shadow-sm h-108 flex flex-col items-center justify-center">
            <div className="w-full h-96 bg-gradient-to-r from-pink-400 to-purple-500 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-white font-bold text-lg">이미지 1</span>
            </div>
            <h3 className="text-gray-800 font-semibold">여행지 1</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white p-4 rounded-lg shadow-sm h-108 flex flex-col items-center justify-center">
            <div className="w-full h-96 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-white font-bold text-lg">이미지 2</span>
            </div>
            <h3 className="text-gray-800 font-semibold">여행지 2</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white p-4 rounded-lg shadow-sm h-108 flex flex-col items-center justify-center">
            <div className="w-full h-96 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-white font-bold text-lg">이미지 3</span>
            </div>
            <h3 className="text-gray-800 font-semibold">여행지 3</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white p-4 rounded-lg shadow-sm h-108 flex flex-col items-center justify-center">
            <div className="w-full h-96 bg-gradient-to-r from-orange-400 to-red-500 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-white font-bold text-lg">이미지 4</span>
            </div>
            <h3 className="text-gray-800 font-semibold">여행지 4</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white p-4 rounded-lg shadow-sm h-108 flex flex-col items-center justify-center">
            <div className="w-full h-96 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-white font-bold text-lg">이미지 5</span>
            </div>
            <h3 className="text-gray-800 font-semibold">여행지 5</h3>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}