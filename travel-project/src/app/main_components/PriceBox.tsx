export default function PriceBox() {
  return (
    <div className="flex flex-col items-start justify-start w-full p-8 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Travel Project Pricing</h1>
      <p className="text-gray-700 mb-6">
        Explore our affordable travel packages! <br />
        <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-blue-500">
          <span className="relative text-white dark:text-gray-950">Affordable</span>
        </span> prices for unforgettable experiences.
      </p>
      <button className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
        View Packages
      </button>
    </div>
  );
}