import React from "react";
import Pagination from "../pagination/Pagination";
import Card from "@/app/components/card/Card";

function CardList() {
  return (
    <div className=" flex flex-col flex-[5]">
      {/* Title */}
      <h1 className="text-3xl font-bold my-12">Recent Posts</h1>

      {/* Cards Container */}
      <div>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Pagination />
    </div>
  );
}

export default CardList;
