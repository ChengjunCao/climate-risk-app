"use client"; // this is a client component 👈🏽

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "./state";
import { server } from "@/config";

const HomePage = () => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    const response = await fetch(`${server}/api/sampleData`);
    const data = await response.json();
    dispatch(setData(data));
  };
  useEffect(() => {
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  const { data } = useSelector((state: any) => state.data);

  return <div>HomePage</div>;
};

export default HomePage;
