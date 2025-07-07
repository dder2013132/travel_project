import Image from "next/image";
import Header from "./main_components/Header";
import Footer from "./main_components/Footer";
import ImageBox from "./main_components/ImageBox";
import "./globals.css";
import PriceBox from "./main_components/PriceBox";
import CommunityBox from "./main_components/CommunityBox";

export default function Home() {
  return (
    <div className="h-auto flex flex-col">
      {/* 헤더 */}
      <div className="p-7 sm:p-7">
        <Header />
      </div>
      
      {/* 메인 콘텐츠 영역 */}
      <main className="flex-1 flex flex-col items-center px-20 sm:px-20">
        {/* TopBox */}
        <div className="flex flex-row h-128 px-40 mb-16 gap-8 items-stretch w-full">
          <div className="w-3/4 lg:flex-1">
          <ImageBox />
          </div>
          <div className="w-1/4 lg:flex-2">
          <PriceBox />
          </div>
        </div>
        
        {/* 기존 Next.js 컨텐츠 */}
        <div className="flex flex-col items-center justify-cente w-full max-w-none h-full px-40 mb-16 rounded-lg">
          <CommunityBox />
        </div>
      </main>
      
      {/* 푸터 */}
      <Footer />
    </div>
  );
}