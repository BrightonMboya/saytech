import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import NavBar from "../../components/HomePage/NavBar";

const bedroom = () => {
  return (
    <React.Fragment>
      <main className="font-montserrat">
        <Head>
          <title>Bed Room</title>
          <meta name="description" content="Best and quality furnitures" />
        </Head>
        <section className="h-[50vh] relative bg-[#000107]">
          <Image
            src="https://res.cloudinary.com/dhhcantbj/image/upload/v1663852454/office/photo-1598928636135-d146006ff4be_eeovm7.jpg"
            objectFit="cover"
            alt="hero"
            layout="fill"
            quality={100}
            style={{
              // backgroundColor: "rgba(0,0,0,0.1)",
              // opacity: 0.9,
              overflow: "hidden",
              imageRendering: "crisp-edges",
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

          <div className="absolute mt-[20vh] md:mt-0 md:ml-0 md:bottom-0 ml-[20vw] h-[50px] w-[220px] bg-orange rounded-md flex items-center justify-center cursor-pointer">
            <h3 className="text-white font-medium text-2xl">Bedroom</h3>
          </div>
        </section>

        <div className="flex flex-col items-center mt-5">
          <h3 className="uppercase font-medium md:text-lg md:tracking-loose">
            description
          </h3>
          <p className="mx-4 md:text-center tracking-wide md:tracking-loose text-justify lg:text-center">
            Nobody said that styling your bedroom can be easy but it can be fun
            from figuring out what color to splash on the wall to the
            furnishing.
          </p>
        </div>

        <section>
          <div className="carousel w-full md:max-w-[90vw] mt-5 md:flex md:items-center md:ml-[5vw]">
            <div
              id="slide1"
              className="carousel-item relative w-full h-[300px] md:h-[400px] lg:h-[500px]"
            >
              <Image
                src="https://res.cloudinary.com/dhhcantbj/image/upload/v1663762447/bedroom/151a7291-4a68-4b21-a64c-a2701b810a9e_jnhbvg.jpg"
                layout="fill"
                alt=""
                objectFit="cover"
              />

              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="text-orange text-3xl">
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
                src="https://res.cloudinary.com/dhhcantbj/image/upload/v1663762448/bedroom/IMG_7075_dafn3c.jpg"
                layout="fill"
                alt=""
                objectFit="cover"
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
                src="https://res.cloudinary.com/dhhcantbj/image/upload/v1663762447/bedroom/IMG_7076_p9qjry.jpg"
                layout="fill"
                alt=""
                objectFit="cover"
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
                src="https://res.cloudinary.com/dhhcantbj/image/upload/v1663762446/bedroom/IMG_7074_caenna.jpg"
                layout="fill"
                alt=""
                objectFit="cover"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="text-orange text-3xl">
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

export default bedroom;
