import Header from "../Header/index";
import Link from "next/link";
export default function Navbar() {
  return (
    <>
      <div className="py-6 intro col-start-1 md:col-span-1 col-span-10 flex row-start-1 z-10 rel">
        <div className="slider absolute">
          <div className="slider-content">
            <div className="slider-content-active project-title">
              <h1 className="text-xl font-normal uppercase">SWEETS</h1>
            </div>
          </div>
        </div>
        {/* <p className="text-xl mr-4 ">SWEETS</p> */}
      </div>

      <div className="col-start-3 md:col-start-2 py-6 col-span-3  z-10 hidden md:block">
        <p className="text-xl">WEB DEVELOPMENT + MEDIA</p>
        <Link href="mailto:danielxshi@hotmail.com" className="text-xl links">
          danielxshi@hotmail.com
        </Link>
      </div>

      <div className="col-start-9 col-end-14 row-start-1 pr-4 relative py-6">
        <nav className="z-10 flex ">
          <div className="hamburger">
            <Header />
          </div>{" "}
        </nav>
      </div>
    </>
  );
}
