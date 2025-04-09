const Favorites = () => {
  const categories = ["African", "Asian", "European", "South American"];

  return (
    <div className="min-h-screen bg-orange-50 p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">My Favorites</h1>

      <div className="flex flex-col gap-6">
        {categories.map((category) => (
          <div
            key={category}
            className="bg-white rounded-lg shadow p-4 border-l-4 border-orange-400"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-4">{category}</h2>

{/* Meal Row */}
<div className="flex items-center gap-4">
  {/* Circle placeholder */}
  <div className="flex-shrink-0">
  <div className="w-32 h-32 bg-gray-300 rounded-full border-2 border-gray-500"></div>
</div>
  {/* Meal name box */}
  <div className="bg-gray-100 p-4 rounded w-full">
    <p className="text-gray-700 font-medium text-lg">Meal name</p>
  </div>
</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
