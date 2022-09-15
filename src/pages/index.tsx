import React from "react";
import Head from "next/head";
import Image from "next/image";
import { FaBars } from "react-icons/fa";

export default function Index() {
  return (
    <div className="">
      <Head>
        <title>SayTech Furnitures</title>
        <meta name="description" content="Best and quality furnitures" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

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
              imageRendering: "crisp-edges",
            }}
          />
          <div className="flex items-center justify-between mr-4 ">
            <div className="w-[176px] h-[66px] relative">
              <Image
                src="/images/logo.svg"
                layout="fill"
                alt="logo"
                quality={100}
                style={{ imageRendering: "crisp-edges" }}
              />
            </div>

            <div className="absolute right-2 cursor-pointer">
              <FaBars size={25} fill="#fff" />
            </div>
          </div>

          <div className="absolute mt-[20vh] ml-[25vw]">
            <h3 className="text-2xl text-white">We don&apos;t make,</h3>
            <h3 className="text-orange font-medium text-5xl">We build.</h3>
          </div>
        </section>

        <section className="mt-3">
          <div>
            <h3 className="text-center text-xl font-medium">
              Your Creative Space
            </h3>
            <p className="mx-4 text-justify mt-2">
              At Saytech, we deliver high quality products in the Interior
              Design Space. Build your dream home, hotel or office from our
              variety of products ranging from furniture, leather, metal work,
              and upholstery.
            </p>

            <div className="grid grid-cols-2 gap-0 mt-[2rem] mx-4">
              <div className="relative h-[155px] w-[142px]">
                <Image src="/images/hero.jpg" alt="" layout="fill" />
              </div>
              <div className="relative h-[320px] w-[142px] row-span-2 mr-8">
                <Image src="/images/img_1.jpg" alt="" layout="fill" />
              </div>
              <div className="relative h-[155px] w-[142px]">
                <Image src="/images/hero.jpg" alt="" layout="fill" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
