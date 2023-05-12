"use client";

import { DataList } from "@/types";
import React from "react";
import { useSelector } from "react-redux";

const DataChart = ({ data }: { data: DataList[] }) => {
  const { year } = useSelector((state: any) => state.data);

  const filteredData = data?.filter((d: any) => d.year === year);

  return <div>{filteredData.length}</div>;
};

export default DataChart;
