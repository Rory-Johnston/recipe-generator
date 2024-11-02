import React from "react";

interface IngredientSearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const IngredientSearch: React.FC<IngredientSearchProps> = ({
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <div className="my-4">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Enter the name of an ingredient"
        className="rounded-3xl p-5 bg-gray-200 w-full outline-none focus:ring-2 focus:ring-black transition"
      />
    </div>
  );
};

export default IngredientSearch;
