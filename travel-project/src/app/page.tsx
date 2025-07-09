"use client";
import Image from "next/image";
import Header from "./main_components/Header";
import Footer from "./main_components/Footer";
import "./globals.css";
import { useEffect } from "react";

// 타입스크립트를 위한 타입 선언
declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

export default function Home() {
  // 구글맵 초기화 함수
  useEffect(() => {
    const initMap = () => {
      // 방법 1: Map ID 사용 (현재 방식)
      const map = new (window as any).google.maps.Map(
        document.getElementById("map"),
        {
          zoom: 7,
          center: { lat: 37.5665, lng: 126.978 },
          mapId: "1e5e92fd23e5482c80edd660",

          // 🔥 모든 UI 컨트롤 숨기기!
          disableDefaultUI: true, // 기본 UI 전부 끄기

          // 개별 설정 (더 세밀한 컨트롤 원하면)
          zoomControl: false, // 줌 버튼 숨기기
          mapTypeControl: false, // 지도/위성 버튼 숨기기
          scaleControl: false, // 스케일 숨기기
          streetViewControl: false, // 스트리트뷰 숨기기
          rotateControl: false, // 회전 컨트롤 숨기기
          fullscreenControl: false, // 전체화면 버튼 숨기기

          styles: [
            {
              featureType: "road",
              elementType: "labels",
              stylers: [{ visibility: "off" }],
            },
          ],

          // 상호작용도 제한하고 싶으면 (선택사항)
          // gestureHandling: "none",  // 마우스/터치 조작 막기
          // draggable: false,         // 드래그 막기
          // scrollwheel: false,       // 휠 줌 막기
        }
      );

      // 디버깅용: 맵 로드 후 확인
      console.log("지도 로드됨:", map);
      console.log("Map ID:", "1e5e92fd23e5482c80edd660");
    };

    // 구글맵 API 스크립트 동적 로드
    if (!(window as any).google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=API_KEY&callback=initMap`;
      script.async = true;
      script.defer = true;

      // 전역 함수로 등록
      (window as any).initMap = initMap;

      document.head.appendChild(script);
    } else {
      initMap();
    }
  }, []);

  return (
    <div className="h-auto flex flex-col">
      {/* 헤더 */}
      <div className="p-7 sm:p-7">
        <Header />
      </div>

      {/* 메인 콘텐츠 영역 */}
      <main className="flex-1 flex flex-col items-center px-20 sm:px-20">
        {/* 새로운 3컬럼 레이아웃: 메뉴(작게) + 항공권(적당) + 지도(개크게) */}
        <div className="flex flex-col w-full max-w-none h-128 gap-8 mb-16">
          {/* 항공권 - 적당 */}
          <div className="w-1/3 bg-blue-50 rounded-lg p-6 flex flex-col">
            <h2 className="text-xl font-bold mb-4">✈️ 항공권 검색</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="출발지"
                  className="flex-1 p-2 border rounded"
                />
                <input
                  type="text"
                  placeholder="도착지"
                  className="flex-1 p-2 border rounded"
                />
              </div>
              <div className="flex gap-4">
                <input type="date" className="flex-1 p-2 border rounded" />
                <input type="date" className="flex-1 p-2 border rounded" />
              </div>
              <button className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600">
                항공권 검색
              </button>
            </div>
          </div>

          {/* 지도 - 개크게 */}
          <div className="flex-1 bg-gray-200 rounded-lg p-4">
            <div
              id="map"
              className="w-full h-full bg-gray-300 rounded min-h-80"
            >
              {/* 구글맵이 여기에 로드될 거야! */}
            </div>
          </div>
        </div>
      </main>

      {/* 푸터 */}
      <Footer />
    </div>
  );
}
