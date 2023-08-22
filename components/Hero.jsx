"use client";

import { useContext } from "react";
import Search from "./Search";
import { SearchContext } from "@/context/search";
import Image from "next/image";
const Hero = () => {
  const { searchActive } = useContext(SearchContext);

  return (
    <section className="h-screen xl:h-[90vh] bg-[#b2b7c2]/10" id="home">
      <div className="container mx-auto h-full xl:pt-10">
        <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-start h-full">
          <div className="text-center xl:max-w-xl xl:text-left mt-16 xl:mt-0">
            <h1 className="h1">
              Explore the Finest <span className="text-accent">Global</span>{" "}
              Offers
            </h1>
            <p>
              Find your ideal ride for any adventure with our diverse range of
              affordable and dependable car rentals.
            </p>
            <div className="flex gap-x-3 justify-center xl:justify-start ">
              <button className="btn-cta">
                <Image
                  src={"/icons/buttons/app-store.svg"}
                  alt="icon google play"
                  width={132}
                  height={36}
                />
              </button>
              <button className="btn-cta">
                <Image
                  src={"/icons/buttons/google-play.svg"}
                  alt="icon google play"
                  width={132}
                  height={36}
                />
              </button>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      {searchActive ? (
        <div className="fixed top-[80px] z-10 w-full max-w-[1920px]">
          <Search />
        </div>
      ) : (
        <div className="-mt-12 w-full max-w-[1300px] mx-auto ">
          <Search />
        </div>
      )}
    </section>
  );
};

export default Hero;
