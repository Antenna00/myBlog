"use client";

import { useRouter } from "next/navigation";
import React from "react";

function Pagination({ page, hasPrev, hasNext }: { page: number, hasPrev:boolean, hasNext:boolean }) {
  const router = useRouter();

  return (
    <div className="flex justify-between">
      <button
      disabled={!hasPrev}
        className="w-[100px] border-none p-4 rounded-md bg-red-500 disabled:bg-gray-200 disabled:text-black cursor-none"
        onClick={() => router.push(page !== 1 ? `?page=${page - 1}` : `/`)}
      >
        Previous
      </button>
      <button
      disabled={!hasNext}
        className="w-[100px] border-none p-4 rounded-md bg-red-500 disabled:bg-gray-200 disabled:text-black cursor-none"
        onClick={() => router.push(`?page=${page + 1}`)}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
