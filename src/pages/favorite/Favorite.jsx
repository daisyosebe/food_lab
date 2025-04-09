const Favorites = () => {
  const categories = ["African", "Asian", "European", "South American"];

  return (
    <div className="min-h-screen bg-orange-50 p-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-orange-600">My Favorites</h1>

      <div className="flex flex-col gap-6">
        {categories.map((category) => (
          <div
            key={category}
            className="bg-white rounded-lg shadow p-6 border-l-4 border-orange-400"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-4">{category}</h2>

{/* Meal Row */}
<div className="flex items-center gap-6">
  {/* Circle placeholder */}
  {/* <div className="flex-shrink-0"> */}
  <div className="w-28 h-28 bg-gray-300 rounded-full border-4 border-gray-400 flex-shrink-0"></div>
{/* </div> */}
  {/* Meal name box */}
  <div className="bg-gray-100 rounded-lg px-6 py-4 w-full shadow-inner border border-gray-300">
    <p className="text-gray-700 text-lg font-semibold">Meal name</p>
  </div>
</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
