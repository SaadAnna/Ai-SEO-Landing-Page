"use clent";

import { title } from "process";

const pricings = [
  {
    soustitle: "",
    feature: "new",
    title: "Starter Package",
    price: "$49/month",
    description: "saad anna is the best developer in the world",
  },
  {
    title: "Growth Package",
    feature: "Popular",
    price: "$99/month",
    description: "saad anna is the best developer in the world",
  },
  {
    title: "Enterprise Package",
    feature: "Expert",
    price: "$199/month",
    description: "saad anna is the best developer in the world",
  },
];

export const Pricing = () => {
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
        <div className="flex p-2.5 py-14 rounded-xl gap-2.5 items-center lg:flex-1 justify-between">
          {pricings.map((pricing) => (
            <div 
              key={pricing.title}
              className="flex flex-col text-start justify-start gap-3 p-2.5 border border-white/20 rounded-xl w-[300px] h-[350px]"
            >

            <div className="flex justify-between  items-center">
            <div className=" text-white/70 tracking-tighter font-medium text-2xl">
                {pricing.price}
              </div>
            <div className=" text-xs rounded-full px-2 py-0.5 bg-[#8c44ff] text-black font-semibold">
                {pricing.feature}
              </div>
            </div>
             
              <div className="text-2xl font-semibold tracking-tight bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text">
                {pricing.title}
              </div>
              <div className=" text-white/20 tracking-tight font-semibold text-lg">
                {pricing.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
