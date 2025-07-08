"use client";

import FlightSearchForm from "@/components/FlightSearchForm";
import FlightResults from "@/components/FlightResults";
import { useState } from "react";

export type FlightSearchParams = {
  departure: string;
  destination: string;
  departureDate: string;
  returnDate: string;
  seatClass: string;
  passengers: number;
};

export default function FlightSearchPage() {
  const [searchParams, setSearchParams] = useState<FlightSearchParams | null>(null);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">✈️ 왕복 항공권 검색</h1>
      <FlightSearchForm onSearch={setSearchParams} />
      {searchParams && (
        <FlightResults searchParams={searchParams} />
      )}
    </div>
  );
}
