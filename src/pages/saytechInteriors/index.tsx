import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import FurnitureCard from "../../components/HomePage/FurnitureCard";
import NavBar from "../../components/HomePage/NavBar";
import { interiorTitles, consultationTitles } from "../../data/dummy";

const index = () => {
  return (
    <React.Fragment>
      <Head>
        <title>SayTech Interiors</title>
        <meta
          name="description"
          content="Get Help with your Interior Designs needs"
        />
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
            <h3 className="text-white font-medium text-2xl">
              Saytech Interiors
            </h3>
          </div>
        </section>

        <div className="text-center  mt-4">
          <h3 className="capitalize font-medium text-xl lg:text-2xl ">
            know us
          </h3>
          <p className="mx-2 mt-2 lg:text-center lg:mx-[4rem] lg:tracking-wide">
            Our goal is to create a sense of layer & texture to your space,
            providing you with Bespoke, Elevated & Artistic Interior/Exterior
            Décor & Accessories.
          </p>
        </div>

        <section className="mt-5 mb-[2rem]">
          <div className="flex flex-col items-center md:grid md:grid-cols-2 md:mx-6 md:max-w-[50rem] lg:max-w-[45rem] md:ml-[10vw] lg:ml-[19vw] xl:ml-[25vw]">
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
          </div>

          <div className="flex flex-col items-center ">
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

        <section>
          <div className="flex items-center justify-center">
            <div className="bg-[rgba(0,0,0,0.7)] w-full md:w-[90vw] lg:w-[75vw] xl:w-[65vw] md:mx-[2rem] xl:mx-[5rem] h-[200px] md:h-[350px] relative lg:aspect-square">
              <Image
                src="/images/img_1.jpg"
                layout="fill"
                objectFit="cover"
                alt=""
                style={{ imageRendering: "crisp-edges" }}
                className="opacity-[0.6]"
              />
              <div className="bg-orange text-white font-medium w-full h-[40px] absolute top-[80px] md:top-[120px] flex items-center justify-center">
                <h3 className="">Saytech interiors services</h3>
              </div>

              <button className="bg-brown px-4 py-2 absolute rounded-md top-[130px] md:top-[190px] left-[23%] md:left-[34%] xl:left-[40%] text-white">
                Make your Appointment
              </button>
            </div>
          </div>

          <div className="mb-[3rem]">
            <div className="flex flex-col items-center md:grid md:grid-cols-2 md:mx-6 md:max-w-[50rem] lg:max-w-[45rem] md:ml-[10vw] lg:ml-[15vw] xl:ml-[25vw] ">
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
            </div>
            <h3 className="mt-4 flex flex-col items-center justify-center">
              We don&apos;t make, <span className="text-orange">We build.</span>
            </h3>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default index;
