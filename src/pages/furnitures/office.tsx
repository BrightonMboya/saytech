import React from "react";
import Image from "next/image";
import Link from "next/link";
import NavBar from "../../components/HomePage/NavBar";
const office = () => {
  return (
    <React.Fragment>
      <main className="font-montserrat">
        <section className="h-[50vh] relative bg-[#000107]">
          <Image
            src="https://images.unsplash.com/photo-1571624436279-b272aff752b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b2ZmaWNlJTIwZnVybml0dXJlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
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
            <div className="w-[176px] h-[66px] relative">
              <Link href="/">
                <Image
                  src="/images/logo.svg"
                  layout="fill"
                  alt="logo"
                  quality={100}
                />
              </Link>
            </div>

            <NavBar />
          </div>

          <div className="absolute mt-[20vh] md:mt-0 ml-[20vw] md:ml-0 md:bottom-0 h-[50px] w-[220px] bg-orange rounded-md flex items-center justify-center cursor-pointer">
            <h3 className="text-white font-medium text-2xl">Office</h3>
          </div>
        </section>

        <div className="flex flex-col items-center mt-5">
          <h3 className="uppercase font-medium md:text-lg md:tracking-loose">
            description
          </h3>
          <p className="mx-4 md:text-center tracking-wide md:tracking-loose text-justify lg:text-center">
            An office space should be equipped with certain elements to assure a
            good working flow, Furnish your work place with comfortable, stylish
            and custom options.
          </p>
        </div>

        <section>
          <div className="carousel w-full md:max-w-[90vw] mt-5 md:flex md:items-center md:ml-[5vw]">
            <div
              id="slide1"
              className="carousel-item relative w-full h-[300px] md:h-[400px] lg:h-[500px]"
            >
              <Image
                src="https://res.cloudinary.com/dhhcantbj/image/upload/v1663762962/office/IMG_7093_jsymrc.jpg"
                layout="fill"
                alt=""
              />

              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide5" className="text-orange text-3xl">
                  ❮
                </a>
                <a href="#slide2" className="text-orange text-3xl">
                  ❯
                </a>
              </div>
            </div>
            <div
              id="slide2"
              className="carousel-item relative w-full h-[300px] md:h-[400px] lg:h-[500px]"
            >
              <Image
                src="https://res.cloudinary.com/dhhcantbj/image/upload/v1663762962/office/IMG_7094_fjaiww.jpg"
                layout="fill"
                alt=""
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="text-orange text-3xl">
                  ❮
                </a>
                <a href="#slide3" className="text-orange text-3xl">
                  ❯
                </a>
              </div>
            </div>
            <div
              id="slide3"
              className="carousel-item relative w-full h-[300px] md:h-[400px] lg:h-[500px]"
            >
              <Image
                src="https://res.cloudinary.com/dhhcantbj/image/upload/v1663762962/office/IMG_7091_wwuc99.jpg"
                layout="fill"
                alt=""
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="text-orange text-3xl">
                  ❮
                </a>
                <a href="#slide4" className="text-orange text-3xl">
                  ❯
                </a>
              </div>
            </div>
            <div
              id="slide4"
              className="carousel-item relative w-full h-[300px] md:h-[400px] lg:h-[500px]"
            >
              <Image
                src="https://res.cloudinary.com/dhhcantbj/image/upload/v1663762962/office/IMG_7095_qexl2h.jpg"
                layout="fill"
                alt=""
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="text-orange text-3xl">
                  ❮
                </a>
                <a href="#slide5" className="text-orange text-3xl">
                  ❯
                </a>
              </div>
            </div>

            <div
              id="slide4"
              className="carousel-item relative w-full h-[300px] md:h-[400px] lg:h-[500px]"
            >
              <Image
                src="https://res.cloudinary.com/dhhcantbj/image/upload/v1663762962/office/IMG_7097_vgjosf.jpg"
                layout="fill"
                alt=""
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="text-orange text-3xl">
                  ❮
                </a>
                <a href="#slide1" className="text-orange text-3xl">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="flex flex-col items-center mb-[4rem]">
          <button
            className="rounded-md px-3 py-2 text-white font-medium bg-brown mt-[2rem]  border-none"
            type="submit"
          >
            Place Your Order
          </button>

          <h3 className="mt-4">
            We don&apos;t make, <span className="text-orange">We build.</span>
          </h3>
        </div>
      </main>
    </React.Fragment>
  );
};

export default office;
