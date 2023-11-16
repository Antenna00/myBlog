import React from "react";

function Pagination() {
  return (
  <div className="flex justify-between">
    <button className="w-[100px] border-none p-4 bg-red-500">
      Previous
    </button>
    <button className="w-[100px] border-none p-4 bg-red-500">
      Next
    </button>
  </div>
  );
}

export default Pagination;
