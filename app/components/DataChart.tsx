"use client";

import { DataList } from "@/types";
import React from "react";
import { useSelector } from "react-redux";

const DataChart = ({ data }: { data: DataList[] }) => {
  const { year } = useSelector((state: any) => state.data);

  const filteredData = data?.filter((d: any) => d.year === year);

  return (
    <div className="flex justify-center items-center bg-gray-200 mt-20">
      <h1 className="text-2xl font-bold mb-8 text-center">Coming Soon...</h1>
    </div>
  );
};

export default DataChart;
