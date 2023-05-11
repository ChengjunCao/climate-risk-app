import { NextResponse } from "next/server";
import fs from "fs/promises";
import { parse } from "csv-parse";
import { DataList } from "@/types";

const fetchData = async () => {
  const data: DataList[] = [];

  const csv = await fs.readFile("public/sample_data.csv");

  const parser = parse(csv, {
    columns: true,
    skip_empty_lines: true,
  });

  parser.on("readable", () => {
    let row;
    while ((row = parser.read())) {
      const rowData: DataList = {
        assetName: row["Asset Name"],
        lat: parseFloat(row["Lat"]),
        long: parseFloat(row["Long"]),
        businessCategory: row["Business Category"],
        riskRating: parseFloat(row["Risk Rating"]),
        riskFactors: JSON.parse(row["Risk Factors"]),
        year: row["Year"],
      };
      data.push(rowData);
    }
  });

  return new Promise<DataList[]>((resolve, reject) => {
    parser.on("end", () => {
      resolve(data);
    });
    parser.on("error", (err) => {
      reject(err);
    });
  });
};
export async function GET(request: Request) {
  const data = await fetchData();
  return NextResponse.json(data);
}
