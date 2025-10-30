'use client'

import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

import Preloader from "@/components/Preloader/Preloader";
import Constructor from "@/components/Constructor/Constructor";
import FAQ from "@/components/FAQ/FAQ";
import Footer from "@/components/Footer/Footer";
import Gallery from "@/components/Gallery/Gallery";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Process from "@/components/Process/Process";
import Reviews from "@/components/Reviews/Reviews";
import Why from "@/components/Why/Why";
export default function Home() {
useEffect(() => {
    const scroll = new LocomotiveScroll({
      smooth: true
    });
  }, []);
  return (
    <>
       <Preloader />
    <main className="p-2">
      <Header/>
      <Hero/>
      <Why/>
      <Constructor/>
      <Reviews/>
      <Gallery/>
      <Process/>
      <FAQ/>
      <Footer/>
    </main>
    </>
  );
}
