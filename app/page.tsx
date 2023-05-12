import { server } from "@/config";

const HomePage = async () => {
  const response = await fetch(`${server}/api/sampleData`);
  const data = await response.json();

  return (
    <div className="flex flex-col h-80vh justify-center items-center bg-gray-200">
      <h2 className="text-2xl font-bold mt-36 mb-12 text-center">
        Welcome to Mike{`'`}s Side Project
      </h2>
      <h1 className="text-4xl font-bold mt-6 mb-24 text-center">
        Climate Risk Visualizer
      </h1>
      <h4 className="text-center text-2xl mb-12">
        A simple web app built with Next.js that visualizes climate risks in the
        coming decades, using data from a CSV sample file.
      </h4>
      <h4 className="text-center text-2xl mb-12">
        Libraries used: Google Maps API, React Data Table Component, Redux, and
        Tailwind CSS
      </h4>
      <h4 className="text-center text-2xl">
        Total data rendered: {data.length} pieces
      </h4>
    </div>
  );
};

export default HomePage;
