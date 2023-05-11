import { server } from "@/config";

const HomePage = async () => {
  const response = await fetch(`${server}/api/sampleData`);
  const data = await response.json();

  return (
    <div>
      <h1>HomePage</h1>
      <h2>{data.length} pieces of sample data</h2>
    </div>
  );
};

export default HomePage;
