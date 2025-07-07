export default function PriceBox() {
  return (
    <div className="flex flex-col items-center justify-start h-full w-full p-8 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">
        항공권
      </h1>
      
      {/* 항공권 가격정보 검색을 위한 입력 */}
      <div className="w-full h-full mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          항공권 검색
        </label>
        
        <p className="mb-4 text-sm text-gray-600">
          출발지, 도착지, 날짜 등을 입력하세요.
        </p>
        
        <div className="space-y-3">
          <input
            type="text"
            id="departure"
            placeholder="출발지"
            className="w-full p-3 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          
          <input
            type="text"
            id="destination"
            placeholder="도착지"
            className="w-full p-3 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          
          <input
            type="date"
            id="departure-date"
            className="w-full p-3 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          
          <input
            type="date"
            id="return-date"
            className="w-full p-3 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      
      <div className="w-full">
        <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-semibold">
          항공권 검색
        </button>
      </div>
    </div>
  );
}