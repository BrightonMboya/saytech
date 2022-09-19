import React from "react";
import Image from "next/image";
import Link from "next/link";
import FurnitureCard from "../../components/HomePage/FurnitureCard";
import NavBar from "../../components/HomePage/NavBar";
import { interiorTitles, consultationTitles } from "../../data/dummy";

const index = () => {
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

          <div className="absolute mt-[20vh] ml-[20vw] h-[50px] w-[220px] bg-orange rounded-md flex items-center justify-center cursor-pointer">
            <h3 className="text-white font-medium text-2xl">Furnitures</h3>
          </div>
        </section>

        <div className="text-center  mt-4">
          <h3 className="capitalize font-medium text-xl ">know us</h3>
          <p className="mx-2 mt-2">
            Our goal is to create a sense of layer & texture to your space,
            providing you with Bespoke, Elevated & Artistic Interior/Exterior
            Décor & Accessories.
          </p>
        </div>

        <section className="flex flex-col items-center mt-5 mb-[2rem]">
          {interiorTitles.map((title) => {
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

        <section>
          <div className="w-full h-[200px] relative">
            <Image src="/images/img_1.jpg" layout="fill" alt="" />
            <div className="bg-orange text-white font-medium w-full h-[40px] absolute top-[80px] flex items-center justify-center">
              <h3 className="">Saytech interiors services</h3>
            </div>

            <button className="bg-brown px-4 py-2 absolute rounded-md top-[130px] left-[20%] text-white">
              Make your Appointment
            </button>
          </div>

          <div className="flex flex-col items-center mb-[3rem]">
            {consultationTitles.map((title) => {
              return (
                <FurnitureCard
                  key={title.id}
                  title={title.title}
                  image={title.image}
                  href={title.href}
                />
              );
            })}
            <h3 className="mt-4">
              We don&apos;t make, <span className="text-orange">We build.</span>
            </h3>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default index;
