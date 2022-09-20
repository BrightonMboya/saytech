import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Reviews from "../components/Reviews";
import NavBar from "../components/HomePage/NavBar";
export default function Index() {
  return (
    <div className="">
      <Head>
        <title>SayTech Furnitures</title>
        <meta name="description" content="Best and quality furnitures" />
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

            <NavBar />
          </div>

          <div className="absolute mt-[20vh] md:mt-0 ml-[25vw] md:ml-0 md:bottom-[2rem] left-[1rem]">
            <h3 className="text-2xl text-white">We don&apos;t make,</h3>
            <h3 className="text-orange font-medium text-5xl">We build.</h3>
          </div>
        </section>

        <section className="mt-3 md:mt-[2.5rem] flex flex-col items-center">
          <div className="md:flex md:items-center md:justify-center md:gap-3">
            <div>
              <h3 className="text-center md:text-left text-xl font-medium">
                Your Creative Space
              </h3>
              <p className="text-justify mt-2 mx-4 md:mx-0 md:tracking-wide md:w-[300px]">
                Creating impactful interior spaces involves much more than a
                sixth sense for style. Exploring not only the things with which
                a space is filled but also how the space itself is put together,
                interior architecture gives homeowners an opportunity to custom
                – create a living space that&apos;s decorated to perfection and
                purpose – built for their lifestyle.
              </p>
            </div>

            <div className="flex items-center justify-center">
              <div className="grid grid-cols-2 gap-0 md:gap-3 mt-[2rem] mx-4">
                <div className="relative h-[155px] w-[142px] ">
                  <Image src="/images/hero.jpg" alt="" layout="fill" />
                </div>
                <div className="relative h-[320px] w-[142px]  row-span-2 mr-8">
                  <Image src="/images/img_1.jpg" alt="" layout="fill" />
                </div>
                <div className="relative h-[155px] w-[142px] ">
                  <Image src="/images/hero.jpg" alt="" layout="fill" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-[340px] md:w-[90vw] md:flex md:flex-col md:items-center h-[350px] relative bg-[#000107] mx-4 mt-3 md:mt-[3rem] rounded-md">
            <Image
              src="/images/img_1.jpg"
              layout="fill"
              alt=""
              style={{
                backgroundColor: "rgba(0,0,0,0.1)",
                opacity: 0.4,
                overflow: "hidden",
              }}
              className="rounded-md"
            />

            <div className="text-center absolute h-full">
              <h3 className="text-orange font-medium mt-5 md:mt-[3rem]">
                DESIGN THAT SPEAKS FOR YOU
              </h3>
              <p className="text-white mt-3 text-[15px] md:text-[17px] mx-3">
                Our aim is to create spaces that are uniquely theirs, reflects
                their personality and has been designed according to how they
                will live and occupy each space. In order to create personal and
                successful designs, we develop a relationship with our clients
                that goes beyond providing functionality solely based on their
                requests, having them be a part of the design process making
                sure they get what they need.
              </p>

              <h3 className="text-white mt-2 md:mt-4 text-[17px] md:text-[19px]">
                We don&apos;t make,{" "}
                <span className="text-orange">We build</span>
              </h3>
            </div>
          </div>

          <div className="md:flex md:items-center md:justify-center md:mt-[2rem]">
            <div className="w-[325px] h-[275px] text-center bg-[#f8f8f8] mx-4 mt-4 shadow-sm rounded-md border-[1px] border-slate-300">
              <h3 className="font-medium pt-[2rem]">SHOW US YOUR STYLE</h3>
              <p className="mt-5">
                Walk us through your architectural space, we look forward to
                adapting to our clientele style and features that will make the
                space theirs.
              </p>

              <Link href="/furnitures">
                <button className="bg-brown px-3 py-2 rounded-md text-white font-medium mt-4 cursor-pointer">
                  View More
                </button>
              </Link>
            </div>

            <div className="w-[325px] h-full text-center bg-[#f8f8f8] mx-4 mt-4 shadow-sm rounded-md border-[1px] border-slate-300 pb-5">
              <h3 className="font-medium pt-[2rem]">TRANSFORM YOUR SPACE</h3>
              <p className="mt-5 mx-2">
                Focusing more on the functionality of a space but also adding
                aesthetic value with color tones alongside distinctive patterns
                and optional design themes, accessories & décor that you can
                choose from.
              </p>

              <button className="bg-brown px-3 py-2 rounded-md text-white font-medium mt-4 cursor-pointer">
                View More
              </button>
            </div>
          </div>
        </section>

        <section className="mt-5">
          <div className="carousel carousel-center max-w-md p-4 space-x-4 rounded-box md:flex md:items-center md:justify-center md:max-w-full md:mx-4">
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
          <div className="text-center md:mt-[2rem]">
            <h3 className="text-sm md:text-lg font-medium">
              Keep Calm and Decorate
            </h3>
            <p className="w-[240px] md:w-full ml-[5rem] md:ml-0 md:text-center mt-2 text-[20px]">
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
