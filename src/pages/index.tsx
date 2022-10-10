import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Reviews from "../components/Reviews";
import HeroImage from "../components/HomePage/HeroImage";
export default function Index() {
  return (
    <div className="">
      <Head>
        <title>SayTech Furnitures</title>
        <meta name="description" content="Best and quality furnitures" />
      </Head>

      <main className="font-montserrat bg-[#f8f8f8]">
        <HeroImage />
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

            <div className="hidden md:flex md:items-center md:justify-center">
              <div className="grid grid-cols-2 gap-0 md:gap-3 mt-[2rem] mx-4">
                <div className="relative h-[155px] w-[142px] ">
                  <Image
                    src="https://res.cloudinary.com/dhhcantbj/image/upload/v1663762962/office/IMG_7091_wwuc99.jpg"
                    alt=""
                    layout="fill"
                    className="rounded-md"
                    objectFit="cover"
                  />
                </div>
                <div className="relative h-[320px] w-[142px]  row-span-2 mr-8">
                  <Image
                    src="https://res.cloudinary.com/dhhcantbj/image/upload/v1663757921/livingroom/IMG_7087_a2bsz5.jpg"
                    alt=""
                    layout="fill"
                    className="rounded-md"
                    objectFit="cover"
                  />
                </div>
                <div className="relative h-[155px] w-[142px] ">
                  <Image
                    src="https://res.cloudinary.com/dhhcantbj/image/upload/v1663757921/livingroom/IMG_7089_id2el4.jpg"
                    alt=""
                    layout="fill"
                    className="rounded-md"
                    objectFit="cover"
                    style={{ imageRendering: "crisp-edges" }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-[340px] md:w-[90vw] lg:w-[60vw] md:flex md:flex-col md:items-center h-[350px] lg:h-[450px] relative bg-[#000107] mx-4 mt-3 md:mt-[3rem] rounded-md">
            <Image
              src="https://res.cloudinary.com/dhhcantbj/image/upload/v1663763711/office/design_that_speaks_for_you_etwdwu.jpg"
              layout="fill"
              alt=""
              style={{
                backgroundColor: "rgba(0,0,0,0.1)",
                opacity: 0.6,
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
            <div className="w-[325px] h-[323px] text-center bg-[#f8f8f8] mx-4 mt-4 shadow-sm rounded-md border-[1px] border-slate-300">
              <h3 className="font-medium pt-[2rem]">SHOW US YOUR STYLE</h3>
              <p className="mt-5">
                Walk us through your architectural space, we look forward to
                adapting to our clientele style and features that will make the
                space theirs.
              </p>

              <Link href="/furnitures">
                <button className="bg-brown px-3 py-2 rounded-md text-white font-medium mt-4 md:mt-[66px] cursor-pointer">
                  View More
                </button>
              </Link>
            </div>

            <div className="w-[325px] h-[323px] text-center bg-[#f8f8f8] mx-4 mt-4 shadow-sm rounded-md border-[1px] border-slate-300 pb-5">
              <h3 className="font-medium pt-[2rem]">TRANSFORM YOUR SPACE</h3>
              <p className="mt-5 mx-2">
                Focusing more on the functionality of a space but also adding
                aesthetic value with color tones alongside distinctive patterns
                and optional design themes, accessories & décor that you can
                choose from.
              </p>

              <Link href="/services">
                <button className="bg-brown px-3 py-2 rounded-md text-white font-medium mt-4 cursor-pointer">
                  View More
                </button>
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-5 flex items-center justify-center">
          <div className="carousel carousel-center max-w-md p-4 space-x-4 rounded-box md:max-w-full md:mx-4 lg:mx-[10rem]">
            <div className="carousel-item w-[250px] h-[180px] relative">
              <Image
                src="https://res.cloudinary.com/dhhcantbj/image/upload/v1663757921/livingroom/IMG_7089_id2el4.jpg"
                alt=""
                layout="fill"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item w-[250px] h-[180px] relative">
              <Image
                src="https://res.cloudinary.com/dhhcantbj/image/upload/v1663757921/livingroom/008d5ee1-a5da-4bfb-996a-bbbb39e67c34_m0uor2.jpg"
                alt=""
                layout="fill"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item w-[250px] h-[180px] relative">
              <Image
                src="https://res.cloudinary.com/dhhcantbj/image/upload/v1663762447/bedroom/151a7291-4a68-4b21-a64c-a2701b810a9e_jnhbvg.jpg"
                alt="hero"
                layout="fill"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item w-[250px] h-[180px] relative">
              <Image
                src="https://res.cloudinary.com/dhhcantbj/image/upload/v1663762682/kitchen/IMG_7088_Edited_j0zy7u.jpg"
                alt=""
                layout="fill"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item w-[250px] h-[180px] relative">
              <Image
                src="https://res.cloudinary.com/dhhcantbj/image/upload/v1663762962/office/IMG_7091_wwuc99.jpg"
                alt=""
                layout="fill"
                className="rounded-box"
              />
            </div>
          </div>
        </section>

        <section className="pb-5">
          {/* <div className="text-center md:mt-[2rem]">
            <h3 className="text-sm md:text-lg font-medium">
              Keep Calm and Decorate
            </h3>
            <p className="flex items-center justify-center md:w-full md:ml-0 md:text-center mt-2 text-[20px]">
              Take a look at our breath-taking Works
            </p>
            <button className="bg-brown px-3 py-2 rounded-md text-white font-medium mt-4 cursor-pointer">
              Our Work
            </button>
          </div> */}

          <Reviews />
        </section>
      </main>
    </div>
  );
}
