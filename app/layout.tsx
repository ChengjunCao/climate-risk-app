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
      <Providers>
        <body className={poppins.className}>
          <Navbar />
          <main className="container mx-auto px-4 py-8">{children}</main>
        </body>
      </Providers>
    </html>
  );
}
