import React from "react";

export const Loading = () => {
  return (
    <div className="loading_container">
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};
