import React from "react";
import Image from "next/image";
import Link from "next/link";
import FurnitureCard from "../../components/HomePage/FurnitureCard";

import { services } from "../../data/dummy";
import NavBar from "../../components/HomePage/NavBar";

export default function Furnitures() {
  return (
    <React.Fragment>
      <main className="font-montserrat">
        <section className="h-[50vh] relative bg-[#000107]">
          <Image
            src="https://images.unsplash.com/photo-1618219740975-d40978bb7378?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1700&q=80"
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
            <h3 className="text-white font-medium text-2xl">Our Services</h3>
          </div>
        </section>

        <section className=" mt-5 mb-[2rem]">
          <div className="flex flex-col items-center md:grid md:grid-cols-2 md:mx-6 md:max-w-[50rem] lg:max-w-[45rem] md:ml-[10vw] lg:ml-[15vw] xl:ml-[25vw] ">
            {services.map((title) => {
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
            <button
              className="bg-brown mt-5 border-none text-white font-medium py-2 px-3 rounded-md cursor-pointer"
              type="submit"
            >
              Place Your Order
            </button>

            <h3 className="mt-4">
              We don&apos;t make, <span className="text-orange">We build.</span>
            </h3>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}