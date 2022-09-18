import React from "react";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import FurnitureCard from "../../components/HomePage/FurnitureCard";

import { titles } from "../../data/dummy";

// const titles = ["living room", "bedrooms", "kitchen", "office"];

export default function Furnitures() {
  return (
    <React.Fragment>
      <main className="font-montserrat">
        <section className="h-[50vh] relative bg-[#000107]">
          <Image
            src="/images/hero.jpg"
            objectFit="cover"
            alt="hero"
            layout="fill"
            style={{
              backgroundColor: "rgba(0,0,0,0.1)",
              opacity: 0.6,
              overflow: "hidden",
            }}
          />
          <div className="flex items-center justify-between mr-4 ">
            <div className="w-[176px] h-[66px] relative">
              <Image
                src="/images/logo.svg"
                layout="fill"
                alt="logo"
                quality={100}
              />
            </div>

            <div className="absolute right-2 cursor-pointer">
              <FaBars size={25} fill="#fff" />
            </div>
          </div>

          <div className="absolute mt-[20vh] ml-[20vw] h-[50px] w-[220px] bg-orange rounded-md flex items-center justify-center cursor-pointer">
            <h3 className="text-white font-medium text-2xl">Furnitures</h3>
          </div>
        </section>

        <section className="flex flex-col items-center mt-5 mb-[2rem]">
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
          <button
            className="bg-brown mt-5 border-none text-white font-medium py-2 px-3 rounded-md cursor-pointer"
            type="submit"
          >
            Place Your Order
          </button>

          <h3 className="mt-4">
            We don&apos;t make, <span className="text-orange">We build.</span>
          </h3>
        </section>
      </main>
    </React.Fragment>
  );
}
