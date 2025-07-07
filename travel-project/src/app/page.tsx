import Image from "next/image";
import Header from "./main_components/Header";
import Footer from "./main_components/Footer";
import ImageBox from "./main_components/ImageBox";
import "./globals.css";
import PriceBox from "./main_components/PriceBox";
import MainBox from "./main_components/MainBox";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 헤더 */}
      <div className="p-7 sm:p-7">
        <Header />
      </div>
      
      {/* 메인 콘텐츠 영역 */}
      <main className="flex-1 flex flex-col items-center px-20 sm:px-20">
        {/* TopBox */}
        <div className="flex flex-row h-full px-40 mb-16 gap-8 items-start w-full">
          <div className="w-full lg:flex-[7]">
          <ImageBox />
          </div>
          <div className="w-full lg:flex-2">
          <PriceBox />
          </div>
        </div>
        
        {/* 기존 Next.js 컨텐츠 */}
        <MainBox />
      </main>
      
      {/* 푸터 */}
      <Footer />
    </div>
  );
}