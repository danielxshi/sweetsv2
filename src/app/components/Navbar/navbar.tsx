import Header from "../Header/index";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/images/logo.png";
import Button from "@/app/components/Button/button";

const MenuItems = [
  {
    title: "services",
    url: "/",
  },
  {
    title: "plans",
    url: "/",
  },
  {
    title: "projects",
    url: "/",
  },
  {
    title: "shop",
    url: "/",
  },
];

export default function Navbar() {
  return (
    <nav className="bg-[rgba(0,0,0,.9)] px-4 py-2 mt-4 mx-4 h-[60px] flex flex-row fixed justify-between ">
      <div
        className="max-w-fit"
        style={{ width: "fit-content", height: "100%", position: "relative" }}
      >
        <Image
          alt="logo"
          src={logo}
          // layout="fill"
          objectFit="contain"
          style={{
            objectFit: "contain",
            width: "fit-content",
            minWidth: "fit-content",
            maxWidth: "fit-content",
          }}
        />
      </div>
      <div className="">
        <ul className="flex flex-row space-x-8 *:my-auto h-full">
          {MenuItems.map((item, index) => (
            <li className="text-white">
              <Link href={item.url}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <Button label="contact"></Button>
    </nav>
  );
}
