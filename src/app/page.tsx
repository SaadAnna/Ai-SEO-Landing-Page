import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Features } from '@/sections/Features';
import { Testimonials } from "@/sections/Testimonials";
import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import { Pricing } from "@/sections/Pricing";
export default function Home() {
  return(
  <>
  <Header />
  <Hero />
  <LogoTicker /> 
  <Features /> 
  <Testimonials /> 
  <Pricing /> 
  <CallToAction /> 
  <Footer /> 
  </>
  ) ;
}
