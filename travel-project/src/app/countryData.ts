// countryData.ts - 파일 확장자를 .ts로 바꿔줘!

// 타입 정의
export interface CountryData {
  name: string;
  image: string;
  position: { lat: number; lng: number };
  description: string;
}

// 국가 데이터 타입 지정
export const countryImages: Record<string, CountryData> = {
  "KR": {
    name: "대한민국",
    image: "/images/countries/korea.jpg",
    position: { lat: 37.5665, lng: 126.978 },
    description: "아름다운 전통과 현대가 공존하는 한국!"
  },
  "JP": {
    name: "일본", 
    image: "/images/countries/japan.jpg",
    position: { lat: 35.6762, lng: 139.6503 },
    description: "벚꽃과 후지산의 나라 일본!"
  },
  "US": {
    name: "미국",
    image: "/images/countries/usa.jpg", 
    position: { lat: 39.8283, lng: -98.5795 },
    description: "자유의 여신상과 그랜드캐년!"
  },
  "CN": {
    name: "중국",
    image: "/images/countries/china.jpg",
    position: { lat: 35.8617, lng: 104.1954 },
    description: "만리장성과 자금성의 나라!"
  },
  "TH": {
    name: "태국",
    image: "/images/countries/thailand.jpg",
    position: { lat: 15.8700, lng: 100.9925 },
    description: "미소의 나라 태국!"
  },
  "FR": {
    name: "프랑스",
    image: "/images/countries/france.jpg",
    position: { lat: 46.2276, lng: 2.2137 },
    description: "에펠탑과 루브르 박물관!"
  },
  "IT": {
    name: "이탈리아",
    image: "/images/countries/italy.jpg",
    position: { lat: 41.8719, lng: 12.5674 },
    description: "로마와 베네치아의 로맨틱한 나라!"
  },
  "GB": {
    name: "영국",
    image: "/images/countries/uk.jpg",
    position: { lat: 55.3781, lng: -3.4360 },
    description: "빅벤과 셜록홈즈의 나라!"
  },
  "ES": {
    name: "스페인",
    image: "/images/countries/spain.jpg",
    position: { lat: 40.4637, lng: -3.7492 },
    description: "플라멩고와 가우디의 나라!"
  },
  "AU": {
    name: "호주",
    image: "/images/countries/australia.jpg",
    position: { lat: -25.2744, lng: 133.7751 },
    description: "코알라와 오페라하우스!"
  },
  "CA": {
    name: "캐나다",
    image: "/images/countries/canada.jpg",
    position: { lat: 56.1304, lng: -106.3468 },
    description: "단풍잎과 나이아가라 폭포!"
  },
  "BR": {
    name: "브라질",
    image: "/images/countries/brazil.jpg",
    position: { lat: -14.2350, lng: -51.9253 },
    description: "삼바와 아마존의 나라!"
  },
  "IN": {
    name: "인도",
    image: "/images/countries/india.jpg",
    position: { lat: 20.5937, lng: 78.9629 },
    description: "타지마할과 스파이스의 나라!"
  },
  "EG": {
    name: "이집트",
    image: "/images/countries/egypt.jpg",
    position: { lat: 26.8206, lng: 30.8025 },
    description: "피라미드와 스핑크스의 신비한 나라!"
  },
  "ZA": {
    name: "남아프리카공화국",
    image: "/images/countries/south-africa.jpg",
    position: { lat: -30.5595, lng: 22.9375 },
    description: "사파리와 희망봉의 나라!"
  }
};