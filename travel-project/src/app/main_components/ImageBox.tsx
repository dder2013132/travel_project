export default function ImageBox() {
  return (
    <div className="flex flex-col items-start justify-start w-full p-8 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Travel Project</h1>
      <p className="text-gray-700 mb-6">
        Explore the world with us! <br /> <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-pink-500">
    <span className="relative text-white dark:text-gray-950">Discover</span>
  </span> new destinations,<br /> plan your trips,<br /> and share your experiences.
      </p>
      <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
        Get Started
      </button>
    </div>
  );
}