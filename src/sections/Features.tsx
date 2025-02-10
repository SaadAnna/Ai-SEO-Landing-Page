"use client";
import ProductImage from "@/assets/product-image.png";
import {
  DotLottieCommonPlayer,
  DotLottiePlayer,
} from "@dotlottie/react-player";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  ValueAnimationTransition,
} from "framer-motion";
import { use, useEffect, useRef } from "react";
const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];
const FeaturesTab = (tab: (typeof tabs)[number]) => {
  const TabRef = useRef<HTMLDivElement>(null);
  const dotlottieref = useRef<DotLottieCommonPlayer>(null);
  const XPercentage = useMotionValue(0);
  const YPercentage = useMotionValue(0);
  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${XPercentage}% ${YPercentage}%,black,transparent)`;
  useEffect(() => {  
    animate(XPercentage, [0, 100, 100, 0, 0], {
       duration: 5,
      repeat: Infinity,
      ease: "linear",
      repeatType: "reverse",
    });
    animate(YPercentage, [0, 0, 100, 100, 0], {
       duration: 5,
      repeat: Infinity,
      ease: "linear",
      repeatType: "reverse",
    });
  }, [XPercentage, YPercentage]);
  const HandleTabHover = () => {
    if (dotlottieref.current === null) return;
    dotlottieref.current.seek(0);
    dotlottieref.current.play();
  };
  return (
    <div className="border border-white/15 flex p-2.5 rounded-xl gap-2.5 items-center lg:flex-1 relative">
      <div
        ref={TabRef}
        onMouseEnter={HandleTabHover}
        className="h-12 w-12 border border-white/15 rounded-lg inline-flex items-center justify-center"
      >
        <motion.div
          style={{
            maskImage,
          }}
          className="absolute inset-0 -m-px rounded-xl border border-[#A369FF] "
        ></motion.div>
        <DotLottiePlayer
          ref={dotlottieref}
          src={tab.icon}
          className="h-5 w-5"
          autoplay
        />
      </div>
      <div className="font-medium">{tab.title}</div>
      {tab.isNew && (
        <div className="text-xs rounded-full px-2 py-0.5 bg-[#8c44ff] text-black font-semibold">
          new
        </div>
      )}
    </div>
  );
};
export const Features = () => {
  return (
    <section className="py-20 md:py-24">
      <motion.div className="container">
        <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter">
          {" "}
          Elevate your SEO efforts
        </h2>
        <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto tracking-tight text-center mt-5">
          From small startups to large enterprises, Our AI-drives toll has
          recolutionezd the way buisnisses the way businesses apporach SEO
        </p>
        <div className="mt-10 flex flex-col lg:flex-row gap-3">
          {tabs.map((tab) => (
            <FeaturesTab {...tab} key={tab.title} />
          ))}
        </div>
        <div className="border border-white/20 p-2.5 rounded-xl mt-3 ">
          <div
            className="aspect-video bg-cover border border-white/20 rounded-lg"
            style={{
              backgroundImage: `url(${ProductImage.src})`,
            }}
          ></div>
        </div>
      </motion.div>
    </section>
  );
};
