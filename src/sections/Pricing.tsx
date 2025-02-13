"use client";
import {
  animate,
  useMotionTemplate,
  useMotionValue,
  motion,
} from "framer-motion";
import { useEffect } from "react";
const pricings = [
  {
    type: false,
    featureOne: "• AI-powered keyword research",
    featureTwo: "• SEO audit & recommendations",
    featureThree: "• Competitor analysis",
    featureFour: "• Rank tracking",
    featureFive: "• Backlink analysis",
    title: "Starter Package",
    price: "$49/month",
    BuyButton: "Get Started",
  },
  {
    title: "Growth Package",
    type: true,
    featureOne: "• Everything in Basic",
    featureTwo: "• AI-driven content suggestions",
    featureThree: "• Competitor analysis",
    featureFour: "• Rank tracking",
    featureFive: "• Backlink analysis",
    price: "$99/month",
    BuyButton: "Get Started",
  },
  {
    title: "Enterprise Package",
    type: false,
    featureOne: "• Everything in Advanced",
    featureTwo: "• AI-generated blog outlines",
    featureThree: "• Backlink analysis",
    featureFour: "• Rank tracking",
    featureFive: "• Advanced technical SEO insights",
    price: "$199/month",
    BuyButton: "Get Started",
  },
];

export const Pricing = () => {
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
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter">
          {" "}
          Pricing
        </h2>
        <p className="text-white/70 text-lg md:text-xl max-w-xl mx-auto tracking-tight text-center mt-5">
          Choose the package that suits you and start your journey with us
        </p>
        <div className="flex p-2.5 py-16  rounded-xl gap-14 items-center lg:flex-1 flex-wrap justify-center">
          {pricings.map((pricing) => (
            <div
              key={pricing.title}
              className="flex flex-col relative  text-start justify-start gap-3 p-2.5 border border-white/20 rounded-xl w-[300px] h-[400px]"
            >
              <motion.div
                style={{
                  maskImage,
                }}
                className="absolute inset-0 -m-px rounded-xl border border-[#A369FF] "
              ></motion.div>
              <div className="flex justify-between  items-center">
                <div className=" text-white/70 tracking-tighter font-medium text-2xl">
                  {pricing.price}
                </div>

                {pricing.type && (
                  <div className=" text-xs rounded-full px-2 py-0.5 bg-[#8c44ff] text-black font-semibold">
                    Popular
                  </div>
                )}
              </div>

              <div className="text-2xl font-semibold tracking-tight bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text">
                {pricing.title}
              </div>
              <div className="flex flex-col text-start justify-start gap-5 mt-3 ">
                <h1 className="text-white/70 text-sm font-meduim tracking-tight ">
                  {pricing.featureOne}
                </h1>
                <h1 className="text-white/70 text-sm font-meduim tracking-tight ">
                  {pricing.featureTwo}
                </h1>
                <h1 className="text-white/70 text-sm font-meduim tracking-tight ">
                  {pricing.featureThree}
                </h1>
                <h1 className="text-white/70 text-sm font-meduim tracking-tight ">
                  {pricing.featureFour}
                </h1>
                <h1 className="text-white/70 text-sm font-meduim tracking-tight ">
                  {pricing.featureFive}
                </h1>
              </div>
              <div className="w-fit cursor-pointer mt-4 bg-gradient-to-t from-[#190d2e] to-[#4a208a] text-sm h-10 items-center p-2.5 rounded-lg justify-end bg-violet-600">
                {pricing.BuyButton}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
