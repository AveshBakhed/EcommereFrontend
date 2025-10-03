import {
  IoMan,
  IoWomanSharp,
  IoHardwareChipSharp,
  IoDiamondSharp,
} from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Categorys() {
  return (
    <div
      className="border-b
     sm:hidden md:hidden pb-5 border-gray-200 mb-8 "
    >
      <nav className="md:hidden sm:hidden grid grid-cols-2  mx-auto text-center py-3 gap-3 w-[90%] h-50  ">
        <Link
          to="/category/men"
          className="text-gray-600 hover:text-gray-700 transition border border-gray-200  text-sm p-2 flex justify-start gap-2 flex-col items-center "
        >
          <span>Men</span> <IoMan className="text-3xl  " />
        </Link>
        <Link
          to="/category/women"
          className="text-gray-600 hover:text-gray-700 transition border border-gray-200  text-sm p-2 flex justify-start gap-2 flex-col items-center"
        >
          <span>Women</span> <IoWomanSharp className="text-3xl " />
        </Link>
        <Link
          to="/category/electronics"
          className="text-gray-600 hover:text-gray-700 transition  border border-gray-200 text-sm p-2 flex justify-start gap-2 flex-col items-center"
        >
          <span>Electronics</span> <IoHardwareChipSharp className="text-3xl " />
        </Link>
        <Link
          to="/category/jewelery"
          className="text-gray-600 hover:text-gray-700 transition border border-gray-200  text-sm p-2 flex justify-start gap-2 flex-col items-center"
        >
          <span>Jewelery</span> <IoDiamondSharp className="text-3xl " />
        </Link>
      </nav>
    </div>
  );
}
