import { server } from "@/config";
import DataMap from "../components/DataMap";
import { Providers } from "../state/provider";

const Map = async () => {
  const response = await fetch(`http://localhost:3000/api/sampleData`);
  const data = await response.json();

  return (
    <Providers>
      <DataMap data={data} />
    </Providers>
  );
};

export default Map;
