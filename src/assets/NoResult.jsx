import React from "react";

const NoResults = ({ searchTerm }) => {
  return (
    <div className="no-results">
      <div className="no-results-content">
        <h2>🔍 No Users Found</h2>
        <p>Sorry, we couldn't find any users matching your search.</p>
        {searchTerm && (
          <p>
            No results for: <strong>"{searchTerm}"</strong>
          </p>
        )}
        <p>Try searching with a different name or check the spelling.</p>
      </div>
    </div>
  );
};

export default NoResults;
