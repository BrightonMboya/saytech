import React from "react";
import Image from "next/image";
import Link from "next/link";
import FurnitureCard from "../../components/HomePage/FurnitureCard";

import { titles } from "../../data/dummy";
import NavBar from "../../components/HomePage/NavBar";

export default function Furnitures() {
  return (
    <React.Fragment>
      <main className="font-montserrat">
        <section className="h-[50vh] relative bg-[#000107]">
          <Image
            src="https://res.cloudinary.com/dhhcantbj/image/upload/v1675761477/saytech/living%20room/008d5ee1-a5da-4bfb-996a-bbbb39e67c34_aixthv.jpg"
            objectFit="cover"
            alt="hero"
            layout="fill"
            style={{
              // backgroundColor: "rgba(0,0,0,0.1)",
              // opacity: 0.6,
              overflow: "hidden",
            }}
          />
          <div className="flex items-center justify-between mr-4 ">
            <Link href="/">
              <div className="w-[176px] h-[66px] relative">
                <Image
                  src="/images/logo.svg"
                  layout="fill"
                  alt="logo"
                  quality={100}
                />
              </div>
            </Link>

            <NavBar />
          </div>

          <div className="absolute mt-[20vh] md:mt-0 ml-[20vw] md:ml-0 md:bottom-0 h-[50px] w-[220px] bg-orange rounded-md flex items-center justify-center cursor-pointer">
            <h3 className="text-white font-medium text-2xl">Furnitures</h3>
          </div>
        </section>

        <section className=" mt-5 mb-[2rem]">
          <div className="flex flex-col items-center md:grid md:grid-cols-2 md:mx-6 md:max-w-[50rem] lg:max-w-[45rem] md:ml-[10vw] lg:ml-[15vw] xl:ml-[25vw] ">
            {titles.map((title) => {
              return (
                <FurnitureCard
                  key={title.id}
                  title={title.title}
                  image={title.image}
                  href={title.href}
                />
              );
            })}
          </div>

          <div className="flex flex-col items-center">
            <Link href="/contact">
              <button
                className="bg-brown mt-5 border-none text-white font-medium py-2 px-3 rounded-md cursor-pointer"
                type="submit"
              >
                Contact Us
              </button>
            </Link>

            <h3 className="mt-4">
              We don&apos;t make, <span className="text-orange">We build.</span>
            </h3>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}
