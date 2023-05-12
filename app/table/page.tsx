import { server } from "@/config";
import DataTable from "../components/DataTable";
import { Providers } from "../state/provider";

const Table = async () => {
  const response = await fetch(`${server}/api/sampleData`);
  const data = await response.json();

  return (
    <Providers>
      <DataTable data={data} />
    </Providers>
  );
};

export default Table;
