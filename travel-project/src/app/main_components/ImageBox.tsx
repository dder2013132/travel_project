"use client";

import React from "react";
import { useState } from "react";

// Swiper 올바른 import 경로
import { Swiper, SwiperSlide } from "swiper/react";
import {
  A11y,
  Navigation,
  Pagination,
  Scrollbar,
  Mousewheel,
  Autoplay,
} from "swiper/modules";
import Image from "next/image";

// Swiper 스타일 import
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function ImageBox() {
  const [swiper, setSwiper] = useState<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handlePrevious = () => {
    if (swiper) swiper.slidePrev();
  };

  const handleNext = () => {
    if (swiper) swiper.slideNext();
  };

  return (
    <div className="flex flex-col items-start mx-auto h-full w-full justify-start p-8 bg-gray-100 rounded-lg shadow-md relative">
      {/* 커스텀 네비게이션 버튼들 */}
      <button
        onClick={handlePrevious}
        disabled={isBeginning}
        className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 transition-all duration-300 ${
          isBeginning
            ? "opacity-30 cursor-not-allowed"
            : "hover:scale-110 hover:drop-shadow-lg"
        }`}
      >
        <img
          src="/images/left-arrow.png"
          alt="이전"
          className="w-12 h-12 hover:opacity-80 transition-opacity duration-300"
        />
      </button>

      <button
        onClick={handleNext}
        disabled={isEnd}
        className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 transition-all duration-300 ${
          isEnd
            ? "opacity-30 cursor-not-allowed"
            : "hover:scale-110 hover:drop-shadow-lg"
        }`}
      >
        <img
          src="/images/right-arrow.png"
          alt="다음"
          className="w-12 h-12 hover:opacity-80 transition-opacity duration-300"
        />
      </button>

      <Swiper
        modules={[Pagination, Mousewheel, Scrollbar, A11y, Autoplay]}
        onSwiper={(swiperInstance: any) => {
          setSwiper(swiperInstance);
          (window as any).swiper = swiperInstance;
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        slidesPerView={1.2}
        threshold={2}
        spaceBetween={20}
        mousewheel={{
          forceToAxis: true,
          sensitivity: 0.1,
          releaseOnEdges: true,
        }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
        }}
        className="w-full h-full rounded-lg"
      >
        <SwiperSlide>
          <div className="bg-white p-4 rounded-lg shadow-sm h-108 flex flex-col items-center justify-center">
            <Image
              className="w-full rounded-lg flex items-center justify-center"
              src="/images/IMG_001.webp"
              alt="paris"
              width={960}
              height={840}
            />
            <h3 className="mt-2 text-gray-800 font-semibold">프랑스, 파리</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white p-4 rounded-lg shadow-sm h-108 flex flex-col items-center justify-center">
            <Image
              className="w-full rounded-lg flex items-center justify-center"
              src="/images/IMG_002.jpg"
              alt="pirence"
              width={960}
              height={840}
            />
            <h3 className="mt-2 text-gray-800 font-semibold">
              이탈리아, 피렌체
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white p-4 rounded-lg shadow-sm h-108 flex flex-col items-center justify-center">
            <Image
              className="w-full h-96 rounded-lg flex items-center justify-center"
              src="/images/IMG_003.jpg"
              alt="jakarta"
              width={960}
              height={840}
            />
            <h3 className="mt-2 text-gray-800 font-semibold">
              인도네시아, 자카르타
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white p-4 rounded-lg shadow-sm h-108 flex flex-col items-center justify-center">
            <Image
              className="w-full h-96 rounded-lg flex items-center justify-center"
              src="/images/IMG_004.jpg"
              alt="rio_dejaneiro"
              width={960}
              height={840}
            />
            <h3 className="mt-2 text-gray-800 font-semibold">
              브라질, 리우데자네이루
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white p-4 rounded-lg shadow-sm h-108 flex flex-col items-center justify-center">
            <Image
              className="w-full h-96 rounded-lg flex items-center justify-center"
              src="/images/IMG_005.jpg"
              alt="giza"
              width={960}
              height={840}
            />
            <h3 className="mt-2 text-gray-800 font-semibold">이집트, 기자</h3>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
