import React from "react";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import HeroCard from "../../components/HomePage/HeroCard";

const office = () => {
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
            <h3 className="text-white font-medium text-2xl">Office</h3>
          </div>
        </section>

        <div className="flex flex-col items-center mt-5">
          <h3 className="uppercase font-medium">description</h3>
          <p className="mx-4 tracking-wide text-justify">
            An office space should be equipped with certain elements to assure a
            good working flow, Furnish your work place with comfortable, stylish
            and custom options.
          </p>
        </div>

        <section>
          <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full h-full">
              <Image src="/images/img_1.jpg" layout="fill" alt="" />

              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img src="https://placeimg.com/800/200/arch" className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img src="https://placeimg.com/800/200/arch" className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <img src="https://placeimg.com/800/200/arch" className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default office;
