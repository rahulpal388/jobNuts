"use client"
import Footer from "@/components/layouts/footer";
import { MainSection } from "@/components/layouts/mainSection";
import { NavBar } from "@/components/layouts/navBar";
import { PopularService } from "@/components/layouts/popularService";
import { WhyJobNut } from "@/components/layouts/WhyJobNut";



export default function Home() {
  return (
    <>
      <div className=" bg-background d dark:bg-foreground overflow-hidden flex flex-col gap-12 bg-backgoundGray ">
        <NavBar />
        <MainSection />
        <PopularService />
        <WhyJobNut />
        <Footer />

      </div>

    </>
  )
}