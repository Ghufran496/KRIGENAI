import logo from "../../images/logo.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white py-20">
      <ul className="flex justify-center items-center gap-36">
        <li>
          <Link href="/">
            <Image
              src={logo}
              alt="Picture of the KRIGEN LOGO"
              width={250}
              height={150}
              quality={100}
              priority
              sizes={"100vw"}
              
            />
          </Link>
        </li>
        <li>
          <ul className="flex justify-center items-center text-gray-600 gap-4 text-lg">
            <li> © 2024 - Powered by KRIGEN.AI</li>
            <li className="hover:text-blue-500">
              {" "}
              <Link href="/Terms">Terms & Conditions</Link>
            </li>
            <li>/</li>
            <li className="hover:text-blue-500">
              {" "}
              <Link href="/Terms">Privacy Policy</Link>
            </li>
            <li>/</li>
            <li className="hover:text-blue-500">
              {" "}
              <Link href="/Terms">Contact Us</Link>
            </li>
          </ul>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
