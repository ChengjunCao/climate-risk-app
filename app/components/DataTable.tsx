"use client";

import { useSelector } from "react-redux";
import { useMemo } from "react";
import Table from "react-data-table-component";
import { DataList } from "@/types";

const DataTable = ({ data }: { data: DataList[] }) => {
  const { year } = useSelector((state: any) => state.data);

  const filteredData = data?.filter((d: any) => d.year === year);

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
      <Table
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

export default DataTable;
