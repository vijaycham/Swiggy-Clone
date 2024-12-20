const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-10">
      {/* Map over an array of 20 items to generate shimmer cards */}
      {[...Array(25)].map((_, index) => (
        <div
          key={index}
          className="relative w-48 h-96 bg-gray-200 rounded-lg overflow-hidden"
        >
          {/* Shimmer background animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>

          {/* Placeholder content */}
          <div className="h-40 bg-gray-300 rounded-md mb-4"></div>
          <div className="h-6 bg-gray-300 rounded-md mb-2"></div>
          <div className="h-4 bg-gray-300 rounded-md mb-2"></div>
          <div className="h-4 bg-gray-300 rounded-md"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
