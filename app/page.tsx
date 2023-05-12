import { server } from "@/config";

const HomePage = async () => {
  const response = await fetch(`${server}/api/sampleData`);
  const data = await response.json();

  return <div>HomePage {data.length}</div>;
};

export default HomePage;
