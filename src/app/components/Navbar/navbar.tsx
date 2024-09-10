"use client";
import Header from "../Header/index";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/images/logo.png";
import Button from "@/app/components/Button/button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

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
  useGSAP(() => {
    const tl = gsap.timeline({});
    tl.to(".nav-anim", {
      delay: 3.3,
      // y: "0",
      duration: 0.35,
      transform: "translate(0%, 0%) ",

      ease: "expoScale(0.5,7, none)",
    });
  }); // <--
  return (
    <nav className="nav-anim border border-white bg-[rgba(0,0,0,.9)] px-4 py-2 mt-4 mx-4 h-[60px] flex flex-row fixed justify-between ">
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
