import { server } from "@/config";
import DataChart from "../components/DataChart";
import { Providers } from "../state/provider";

const Table = async () => {
  const response = await fetch(`${server}/api/sampleData`);
  const data = await response.json();

  return (
    <Providers>
      <DataChart data={data} />
    </Providers>
  );
};

export default Table;
