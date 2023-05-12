import { server } from "@/config";
import DataTable from "../components/DataTable";
import { Providers } from "../state/provider";

const Table = async () => {
  const response = await fetch(`http://localhost:3000/api/sampleData`);
  const data = await response.json();
  console.log(server);

  return (
    <Providers>
      <DataTable data={data} />
    </Providers>
  );
};

export default Table;
