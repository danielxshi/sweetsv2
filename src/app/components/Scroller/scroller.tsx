import Card from "./card";
import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";
import Image from "next/image";

interface Props {
  title?: string;
  src?: string;
  width?: any;
  height?: any;
  quality?: any;
}

export default function Home({ title }: Props) {
  const images = [
    "/image-1.jpg",
    "/image-2.jpg",
    "/image-3.jpg",
    "/image-4.jpg",
    "/image-5.jpg",
    "/image-6.jpg",
    "/image-7.jpg",
  ];
  const FAST_DURATION = 150;
  const SLOW_DURATION = 200;

  const [duration, setDuration] = useState(FAST_DURATION);
  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [rerender, xTranslation, duration, width]);

  return (
    <main className="relative">
      <motion.div
        className=" left-0 flex gap-4"
        style={{ x: xTranslation }}
        ref={ref}
        onHoverStart={() => {
          setMustFinish(true);
          setDuration(SLOW_DURATION);
        }}
        onHoverEnd={() => {
          setMustFinish(true);
          setDuration(FAST_DURATION);
        }}
      >
        {[...images, ...images].map((item, idx) => (
          // <Card image={`${item}`} key={idx} />
          <div className="flex row h-fit max-h-[20vh]" key={idx}>
            <h1 className="whitespace-nowrap	h-fit leading-extra-tight">
              {title}
            </h1>
            <div className="w-48 h-32 overflow-hidden">
              <Image
                alt="running bomberman"
                width={50}
                height={50}
                src="/images/6.jpg"
              ></Image>
            </div>
          </div>
        ))}
      </motion.div>
    </main>
  );
}
