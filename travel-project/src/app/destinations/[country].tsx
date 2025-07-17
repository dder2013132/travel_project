import { useRouter } from "next/router";
import { countryImages } from "../countryData";
import { useEffect, useState } from "react";

interface CountryData {
  name: string;
  image: string;
  position: { lat: number; lng: number };
  description: string;
}

const CountryDestination = () => {
  const router = useRouter();
  const { country } = router.query;
  const [countryData, setCountryData] = useState<CountryData | null>(null);

  useEffect(() => {
    if (country) {
      // URL의 국가명을 실제 데이터와 매칭
      const foundCountry = Object.values(countryImages).find(
        (data) =>
          data.name.replace(/\s+/g, "-").replace(/[()]/g, "").toLowerCase() ===
          country
      );

      setCountryData(foundCountry || null);
    }
  }, [country]);

  if (!countryData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">
            여행지를 찾을 수 없어요 ㅠㅠ
          </h1>
          <button
            onClick={() => router.push("/")}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
          >
            메인으로 돌아가기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 이미지 */}
      <div className="relative h-64 md:h-80 lg:h-96">
        <img
          src={countryData.image}
          alt={countryData.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            {countryData.name}
          </h1>
        </div>
      </div>

      {/* 콘텐츠 */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">✈️ 여행 정보</h2>
          <p className="text-lg text-gray-700 mb-6">
            {countryData.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">🎯 추천 관광지</h3>
              <p className="text-gray-600">곧 업데이트 예정입니다!</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">🍜 대표 음식</h3>
              <p className="text-gray-600">곧 업데이트 예정입니다!</p>
            </div>
          </div>
        </div>

        <button
          onClick={() => router.push("/")}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
        >
          ← 메인으로 돌아가기
        </button>
      </div>
    </div>
  );
};

export default CountryDestination;
