export default function MainBox() {
  return (
    <div className="flex flex-col gap-8 items-center sm:items-start mb-16">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Travel Project</h1>
      <p className="text-lg text-gray-700 mb-6">
        Explore the world with our amazing travel packages!
      </p>
      <button className="px6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
        Get Started
      </button>
    </div>
  );
}