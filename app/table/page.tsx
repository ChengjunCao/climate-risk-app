"use client";

import { useSelector, useDispatch } from "react-redux";
import { server } from "@/config";
import { useEffect, useMemo } from "react";
import { setData } from "../state";
import DataTable from "react-data-table-component";
import { DataList } from "@/types";

const Table = () => {
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

  const dataTableColumns = useMemo(
    () => [
      {
        name: "Asset Name",
        grow: 1,
        sortable: true,
        selector: (row: DataList) => row?.assetName,
      },
      {
        name: "Business Category",
        grow: 1,
        sortable: true,
        selector: (row: DataList) => row?.businessCategory,
      },

      {
        name: "Risk Factors",
        grow: 1.5,
        cell: (row: DataList) => {
          const factors = Object.entries(row?.riskFactors);

          return (
            <div>
              {factors.map((factor, index: number) => (
                <div key={index}>{`${factor[0]}: ${factor[1]}`}</div>
              ))}
            </div>
          );
        },
      },
      {
        name: "Risk Rating",
        grow: 1,
        sortable: true,
        selector: (row: DataList) => row?.riskRating,
      },
      {
        name: "Year",
        grow: 1,
        sortable: true,
        selector: (row: DataList) => row?.year,
      },
    ],
    []
  );

  return (
    <div className="px-8 py-8">
      <DataTable
        columns={dataTableColumns}
        data={filteredData}
        pagination
        pointerOnHover
        striped
        highlightOnHover
      />
    </div>
  );
};

export default Table;
