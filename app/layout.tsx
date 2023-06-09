import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "./components/Navbar";
import { Providers } from "./state/provider";

const poppins = Poppins({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Climate Risk Visualizer",
  description: "Climate Risk Visualizer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          poppins.className +
          "flex flex-col h-screen justify-center items-center bg-gray-200"
        }
      >
        <Providers>
          <Navbar />
          <main className="container">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
