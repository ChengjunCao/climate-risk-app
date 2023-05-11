"use client";

import { useSelector, useDispatch } from "react-redux";
import { server } from "@/config";
import { useEffect } from "react";
import { setData } from "../state";

const Map = () => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    const response = await fetch(`${server}/api/sampleData`);
    const data = await response.json();
    dispatch(setData(data));
  };
  useEffect(() => {
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const filteredData = useSelector(
    ({ data: { data, year } }: { data: any; year: any }) =>
      data?.filter((d: any) => d.year === year)
  );

  return <div>Map {filteredData.length}</div>;
};

export default Map;
