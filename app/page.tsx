
import Footer from "@/components/layouts/footer";
import { HowItWork } from "@/components/layouts/howItWork";
import { MainSection } from "@/components/layouts/mainSection";
import { NavBar } from "@/components/layouts/navBar";
import { PopularSerrvice } from "@/components/layouts/popularService";
import WhyJobNut from "@/components/layouts/WhyJobNut";
import { Input } from "@/components/ui/input";
import { div } from "motion/react-client";
import React from "react";



export default function Home() {
  return (
    <>
      <div className="overflow-hidden flex flex-col gap-12 bg-backgoundGray ">
        <NavBar />
        <MainSection />
        <PopularSerrvice />
        <WhyJobNut />
        <Footer />

      </div>

    </>
  )
}