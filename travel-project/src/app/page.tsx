"use client";
import Image from "next/image";
import Header from "./main_components/Header";
import Footer from "./main_components/Footer";
import CusNav from "@/components/common/Navigation"
import { TravelCard } from "@/components/travel/TravelCards"
import "./globals.css";
import { useEffect, useState } from "react";
import { countryImages } from "./countryData";

// 타입 정의 추가
interface CountryData {
  name: string;
  image: string;
  position: { lat: number; lng: number };
  description: string;
}

// 타입스크립트를 위한 타입 선언
declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

export default function Home() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  
  // 새로운 상태들 추가! (타입 지정)
  const [hoveredCountry, setHoveredCountry] = useState<CountryData | null>(null);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [map, setMap] = useState<any>(null);
  
  // 마우스 위치 트래킹 (타입 지정)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  // 국가 이미지 보여주기 (타입 지정)
  const showCountryImage = (countryData: CountryData) => {
    setHoveredCountry(countryData);
  };
  
  // 국가 이미지 숨기기
  const hideCountryImage = () => {
    setHoveredCountry(null);
  };
  
  // 구글맵 초기화 함수
  useEffect(() => {
    const initMap = () => {
      const mapInstance = new (window as any).google.maps.Map(
        document.getElementById("map"),
        {
          zoom: 3,
          center: { lat: 20, lng: 0 },
          mapId: "1e5e92fd23e5482c80edd660",
          disableDefaultUI: true,
          zoomControl: false,
          mapTypeControl: false,
          scaleControl: false,
          streetViewControl: false,
          rotateControl: false,
          fullscreenControl: false,
          scrollwheel: true,
          gestureHandling: 'greedy',
          styles: [
            {
              featureType: "road",
              elementType: "labels",
              stylers: [{ visibility: "off" }],
            },
            {
              featureType: "administrative",
              elementType: "labels",
              stylers: [{ visibility: "on" }],
            },
          ],
        }
      );

      setMap(mapInstance);

      // 각 국가에 마커 추가하기
      Object.entries(countryImages).forEach(([code, country]: [string, CountryData]) => {
        const marker = new (window as any).google.maps.Marker({
          position: country.position,
          map: mapInstance,
          title: country.name,
          icon: {
            url: 'data:image/svg+xml;base64,' + btoa(`
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30">
                <circle cx="15" cy="15" r="12" fill="rgba(59, 130, 246, 0.8)" stroke="white" stroke-width="3"/>
                <circle cx="15" cy="15" r="6" fill="white"/>
              </svg>
            `),
            scaledSize: new (window as any).google.maps.Size(30, 30)
          }
        });

        // 호버 이벤트 리스너들
        marker.addListener('mouseover', () => {
          console.log(`${country.name} 호버됨!`); // 디버깅용
          showCountryImage(country);
        });

        marker.addListener('mouseout', () => {
          console.log(`${country.name} 호버 끝!`); // 디버깅용
          hideCountryImage();
        });
        
        // 클릭 이벤트
        marker.addListener('click', () => {
          alert(`${country.name} 여행 정보를 준비중입니다! ✈️`);
        });
      });

      console.log("지도 로드됨:", mapInstance);
      console.log("마커 개수:", Object.keys(countryImages).length);
    };

    // 구글맵 API 스크립트 동적 로드
    if (!(window as any).google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
      script.async = true;
      script.defer = true;

      (window as any).initMap = initMap;
      document.head.appendChild(script);
    } else {
      initMap();
    }
  }, [apiKey]);

  return (
    <div className="h-auto bg-my-color w-full flex flex-col">
      {/* 헤더 */}
        <CusNav />

      {/* 메인 콘텐츠 영역 */}
      <main className="flex-1 flex flex-col bg-my-color items-center px-20 sm:px-20 min-h-screen">
        <div className="flex flex-col w-full max-w-none gap-8 mb-16 flex-1">
          {/* 항공권 - 적당 */}
          <div className="bg-ticket-color rounded-lg p-6 flex flex-col flex-shrink-0">
            <h2 className="text-xl text-white font-bold mb-4">✈️ 항공권 검색</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="출발지"
                  className="flex-1 p-2 border rounded bg-white"
                />
                <input
                  type="text"
                  placeholder="도착지"
                  className="flex-1 p-2 border rounded bg-white"
                />
              </div>
              <div className="flex gap-4">
                <input type="date" className="flex-1 p-2 border rounded bg-white" />
                <input type="date" className="flex-1 p-2 border rounded bg-white" />
              </div>
              <button className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600">
                항공권 검색
              </button>
            </div>
          </div>

          {/* 지도 - 개크게 */}
          <div className="flex-1 min-h-0 relative">
            <div id="map" className="min-h-[40vh] sm:min-h-[45vh] md:min-h-[50vh] lg:min-h-[60vh] rounded-lg">
              {/* 구글맵이 여기에 로드 */}
            </div>
            
            {/* 호버 시 나타나는 국가 이미지 카드 */}
            {hoveredCountry && (
              <div 
                className="fixed z-50 pointer-events-none transform -translate-x-1/2 -translate-y-full"
                style={{
                  left: mousePosition.x,
                  top: mousePosition.y - 20,
                }}
              >
                <div className="bg-white rounded-lg shadow-2xl p-4 max-w-xs country-card">
                  <div className="relative w-full h-32 mb-3 rounded-lg overflow-hidden">
                    <img 
                      src={hoveredCountry.image} 
                      alt={hoveredCountry.name}
                      className="w-full h-full object-cover"
                      onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                        // 이미지 로드 실패 시 기본 이미지 표시 (타입 수정)
                        const target = e.target as HTMLImageElement;
                        target.src = '/images/countries/default.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <h3 className="text-center font-bold text-lg text-gray-800 mb-1">
                    {hoveredCountry.name}
                  </h3>
                  <p className="text-center text-sm text-gray-600 leading-tight">
                    {hoveredCountry.description}
                  </p>
                  <div className="mt-2 text-center">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      클릭해서 더 보기! 👆
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      {/* 여행지 카드 컴포넌트 */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">🌍 인기 여행지</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Object.values(countryImages).map((destination, index) => {
            // TravelDestination 타입으로 변환
            const travelDestination = {
              ...destination,
              id: String(index), // id를 string으로 변환
              location: destination.name, // 또는 적절한 위치 정보
              rating: 4.5, // 임의의 평점, 필요에 따라 수정
              category: "기타", // 임의의 카테고리, 필요에 따라 수정
            };
            return <TravelCard key={index} destination={travelDestination} />;
          })}
        </div>
      </div>
      {/* 푸터 */}
      <Footer />
    </div>
  );
}