import Image from "next/image";
import style from "./style.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Scroll() {
  return (
    <div className={style.scrollwrapper}>
      <section className={style.section}>
        <div className={style.scrollcontainer}>
          <div className={style.slide}>
            <div className={[[style.skewgroup], [style.gallery]].join("")}>
              <Image
                src="/images/1.jpg"
                alt=""
                width={300}
                height={300}
              ></Image>
              <Image
                src="/images/2.jpg"
                alt=""
                width={300}
                height={300}
              ></Image>
              <Image
                src="/images/3.jpg"
                alt=""
                width={300}
                height={300}
              ></Image>
              <Image
                src="/images/4.jpg"
                alt=""
                width={300}
                height={300}
              ></Image>
            </div>
          </div>
          <div className={style.slide}>
            <div className={[[style.skewgroup], [style.gallery]].join("")}>
              <Image
                src="/images/1.jpg"
                alt=""
                width={300}
                height={300}
              ></Image>
              <Image
                src="/images/2.jpg"
                alt=""
                width={300}
                height={300}
              ></Image>
              <Image
                src="/images/3.jpg"
                alt=""
                width={300}
                height={300}
              ></Image>
              <Image
                src="/images/4.jpg"
                alt=""
                width={300}
                height={300}
              ></Image>
            </div>
          </div>
          <div className={style.slide}>
            <div className={[[style.skewgroup], [style.gallery]].join("")}>
              <Image
                src="/images/1.jpg"
                alt=""
                width={300}
                height={300}
              ></Image>
              <Image
                src="/images/2.jpg"
                alt=""
                width={300}
                height={300}
              ></Image>
              <Image
                src="/images/3.jpg"
                alt=""
                width={300}
                height={300}
              ></Image>
              <Image
                src="/images/4.jpg"
                alt=""
                width={300}
                height={300}
              ></Image>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
