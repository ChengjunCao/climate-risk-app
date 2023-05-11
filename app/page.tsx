import { server } from "@/config";
import Map from "./map/page";

const HomePage = async () => {
  const response = await fetch(`${server}/api/sampleData`);
  const data = await response.json();

  return (
    <div>
      <Map data={data} />
    </div>
  );
};

export default HomePage;
