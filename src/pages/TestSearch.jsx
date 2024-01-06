// src/pages/SearchResultsPage.jsx
import React from "react";
import SearchResult from "./SearchResult"; // Assuming SearchResult is in the same folder

const SearchResultsPage = ({ searchResults, status }) => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mt-10">
        {searchResults.length > 0 ? (
          searchResults.map((result, index) => (
            <SearchResult key={index} data={result} />
          ))
        ) : status === "success" ? (
          <p>No search results found</p>
        ) : status === "error" ? (
          <p>Error fetching search results</p>
        ) : (
          <p>Searching...</p>
        )}
      </div>
    </div>
  );
};

export default SearchResultsPage;
