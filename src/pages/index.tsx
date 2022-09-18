import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Reviews from "../components/Reviews";
import { FaBars } from "react-icons/fa";

export default function Index() {
  return (
    <div className="">
      <Head>
        <title>SayTech Furnitures</title>
        <meta name="description" content="Best and quality furnitures" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className="font-montserrat bg-[#f8f8f8]">
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

          <div className="absolute mt-[20vh] ml-[25vw]">
            <h3 className="text-2xl text-white">We don&apos;t make,</h3>
            <h3 className="text-orange font-medium text-5xl">We build.</h3>
          </div>
        </section>

        <section className="mt-3 flex flex-col items-center">
          <div>
            <h3 className="text-center text-xl font-medium">
              Your Creative Space
            </h3>
            <p className="text-justify mt-2 mx-4">
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

          <div className="w-[325px] h-[275px] relative bg-[#000107] mx-4 mt-3 rounded-md">
            <Image
              src="/images/img_1.jpg"
              layout="fill"
              alt=""
              style={{
                backgroundColor: "rgba(0,0,0,0.1)",
                opacity: 0.4,
                overflow: "hidden",
              }}
            />

            <div className="text-center absolute">
              <h3 className="text-orange font-medium mt-5">
                DESIGN THAT SPEAKS FOR YOU
              </h3>
              <p className="text-white mt-3 text-[15px]">
                Transform your space from our breath-taking designs ranging from
                furniture, metal-work, canvas, leather, and upholstery
              </p>

              <h3 className="text-white mt-2 text-[17px]">
                We don&apos;t make,{" "}
                <span className="text-orange">We build</span>
              </h3>
            </div>
          </div>

          <div className="w-[325px] h-[275px] text-center bg-[#f8f8f8] mx-4 mt-4 shadow-sm rounded-md border-[1px] border-slate-300">
            <h3 className="font-medium pt-[2rem]">SHOW US YOUR STYLE</h3>
            <p className="mt-5">
              Have a dream office or house? Share with us your inspiration, what
              you want to achieve and budget and leave the rest to us
            </p>

            <Link href="/furnitures">
              <button className="bg-brown px-3 py-2 rounded-md text-white font-medium mt-4 cursor-pointer">
                View More
              </button>
            </Link>
          </div>

          <div className="w-[325px] h-[275px] text-center bg-[#f8f8f8] mx-4 mt-4 shadow-sm rounded-md border-[1px] border-slate-300">
            <h3 className="font-medium pt-[2rem]">TRANSFORM YOUR SPACE</h3>
            <p className="mt-5">
              With our vast experience, we can handle different projects from
              your dream home, office, together with lodges and hotels
            </p>

            <button className="bg-brown px-3 py-2 rounded-md text-white font-medium mt-4 cursor-pointer">
              View More
            </button>
          </div>
        </section>

        <section className="mt-5">
          <div className="carousel carousel-center max-w-md p-4 space-x-4 rounded-box">
            <div className="carousel-item w-[250px] h-[180px] relative">
              <Image
                src="/images/img_1.jpg"
                alt=""
                layout="fill"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item w-[250px] h-[180px] relative">
              <Image
                src="/images/img2.jpg"
                alt=""
                layout="fill"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item w-[250px] h-[180px] relative">
              <Image
                src="/images/img_1.jpg"
                alt="hero"
                layout="fill"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item w-[250px] h-[180px] relative">
              <Image
                src="/images/img2.jpg"
                alt=""
                layout="fill"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item w-[250px] h-[180px] relative">
              <Image
                src="/images/hero.jpg"
                alt=""
                layout="fill"
                className="rounded-box"
              />
            </div>
          </div>
        </section>

        <section className="pb-5">
          <div className="text-center">
            <h3 className="text-sm">Keep Calm and Decorate</h3>
            <p className="w-[240px] ml-[5rem] mt-2 text-[20px]">
              Take a look at our breath-taking Works
            </p>
            <button className="bg-brown px-3 py-2 rounded-md text-white font-medium mt-4 cursor-pointer">
              Our Work
            </button>
          </div>

          <Reviews />
        </section>
      </main>
    </div>
  );
}
