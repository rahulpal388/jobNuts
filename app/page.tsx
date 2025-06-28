"use client"
import Footer from "@/components/layouts/footer";
import { MainSection } from "@/components/layouts/mainSection";
import { NavBar } from "@/components/layouts/navBar";
import { PopularService } from "@/components/layouts/popularService";
import { WhyJobNut } from "@/components/layouts/WhyJobNut";
import { div } from "motion/react-client";
import { useSession } from "next-auth/react";



export default function Home() {
  const { data, status } = useSession();



  if (status === "loading") {
    return <div className=" dark:bg-foreground h-screen bg-background flex justify-center items-center   " >
      <div className="h-20 w-20   rounded-full border-2 border-t-0  border-destructive animate-spin  ">  </div>
    </div>
  }



  return (
    <>
      <div className=" bg-background d dark:bg-foreground overflow-hidden flex flex-col gap-12 bg-backgoundGray ">
        <NavBar />
        <MainSection />
        <PopularService />
        <WhyJobNut />

      </div>

    </>
  )



}