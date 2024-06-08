//import { Inter } from "next/font/google";
import "./globals.css";

//const inter = Inter({ subsets: ["latin"] });

import Link from "next/link";
import Image from "next/image";
import logo from "../images/logo.png";

export const metadata = {
  title: "KRIGEN.AI",
  description: "KRIGEN.AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className= "bg-slate-200">
        <div className="flex justify-center items-center">
        <header className="flex justify-around items-center rounded-full w-11/12 my-6 text-lg bg-slate-100 py-4">
          <h1>
            <Link href="/home">
              <Image
                src={logo}
                alt="Picture of the author"
                width={150}
                height={150}
                quality={100}
                priority
                sizes={"100vw"}
                style={{
                  objectFit: "cover",
                }}
              />
            </Link>
          </h1>
          <div className="grid grid-cols-3">
            <h2 className="text-gray-600 hover:text-black">
              <Link href="#sec1">Watch Demo</Link>
            </h2>

            <h2 className="pl-4 text-gray-600 hover:text-black">
              <Link href="#sec1">Pricing</Link>
            </h2>

            <h2 className="text-gray-600 hover:text-black">
              <Link href="#sec1">Book Call</Link>
            </h2>
          </div>
          <div className="mt-0 flex items-center justify-end">
            <button
              type="submit"
              className="rounded-xl bg-gradient-to-r bg-black px-8 py-2 text-lg font-medium text-white shadow-sm hover:from-indigo-500 hover:via-purple-500 hover:to-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <Link href="https://app.krigen.ai/" target="_blank">LOG IN</Link>
            </button>
          </div>
        </header>
        </div>
        {children}
      </body>
    </html>
  );
}
