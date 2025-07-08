"use client";

import { useState } from "react";
import { FlightSearchParams } from "@/app/flights/page";

type Props = {
  onSearch: (params: FlightSearchParams) => void;
};

const FlightSearchForm = ({ onSearch }: Props) => {
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [seatClass, setSeatClass] = useState("이코노미");
  const [passengers, setPassengers] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      departure,
      destination,
      departureDate,
      returnDate,
      seatClass,
      passengers,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-6 rounded-lg shadow-lg"
    >
      <input
        type="text"
        placeholder="출발지 (예: ICN)"
        value={departure}
        onChange={(e) => setDeparture(e.target.value)}
        className="p-3 border rounded-lg"
        required
      />
      <input
        type="text"
        placeholder="도착지 (예: JFK)"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        className="p-3 border rounded-lg"
        required
      />
      <input
        type="date"
        value={departureDate}
        onChange={(e) => setDepartureDate(e.target.value)}
        className="p-3 border rounded-lg"
        required
      />
      <input
        type="date"
        value={returnDate}
        onChange={(e) => setReturnDate(e.target.value)}
        className="p-3 border rounded-lg"
        required
      />
      <select
        value={seatClass}
        onChange={(e) => setSeatClass(e.target.value)}
        className="p-3 border rounded-lg"
      >
        <option>이코노미</option>
        <option>비즈니스</option>
        <option>퍼스트</option>
      </select>
      <input
        type="number"
        min="1"
        value={passengers}
        onChange={(e) => setPassengers(Number(e.target.value))}
        className="p-3 border rounded-lg"
        required
      />
      <button
        type="submit"
        className="col-span-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
      >
        🔍 항공권 검색
      </button>
    </form>
  );
};

export default FlightSearchForm;
