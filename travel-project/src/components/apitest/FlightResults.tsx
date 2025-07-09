"use client";

import { FlightSearchParams } from "@/app/apitest/page";
import React from "react";
import axios from "axios";

type Props = {
  searchParams: FlightSearchParams;
};

const FlightResults = ({ searchParams }: Props) => {
  // ✨ 임시 Mock 데이터 (실제 API 연결 시 교체)
  // const flights = [
  //   {
  //     airline: "대한항공",
  //     flightNumber: "KE123",
  //     departureTime: "2025-08-01 09:30",
  //     arrivalTime: "2025-08-01 12:00",
  //   },
  //   {
  //     airline: "아시아나항공",
  //     flightNumber: "OZ456",
  //     departureTime: "2025-08-01 14:00",
  //     arrivalTime: "2025-08-01 16:30",
  //   },
  // ];
  // 실제 API 호출로 대체
  const [flights, setFlights] = React.useState([]);

  const fetchFlights = async () => {
    try {
      const response = await axios.get(`/api/apitest`)


  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">🔎 검색 결과</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {flights.map((flight, idx) => (
          <li
            key={idx}
            className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition-shadow border flex flex-col justify-between"
          >
            <div>
              <p className="font-bold text-xl mb-2">
                {flight.airline} {flight.flightNumber}
              </p>
              <p className="text-gray-600">
                🛫 출발: {flight.departureTime}
              </p>
              <p className="text-gray-600">
                🛬 도착: {flight.arrivalTime}
              </p>
              <p className="mt-2">
                좌석: {searchParams.seatClass} / {searchParams.passengers}명
              </p>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <p className="text-lg text-red-500 font-semibold">💰 가격: 미정</p>
              <button
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
              >
                예약하기
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlightResults;
