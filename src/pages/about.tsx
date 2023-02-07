import React from "react";
import Image from "next/image";
import Link from "next/link";
import NavBar from "../components/HomePage/NavBar";

const about = () => {
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

          <div className="absolute mt-[20vh] ml-[20vw] h-[50px] w-[220px] cursor-pointer">
            <h3 className="text-white font-medium text-4xl">About Us</h3>
          </div>
        </section>

        <section>
          <article className="pl-5 mt-5 tracking-wide ">
            Saytech is an innovative and agile manufacturing company of
            furniture, fittings and fixtures. We deliver excellent service of
            high-quality products. The company initially started with the
            specialization of carpentry work producing wood based products. Over
            the past few years, we have grown to include metal work as well as
            upholstery, canvas and leather. Modern machinery and techniques are
            used in combination with expert knowledge that has been passed down
            through previous generations of the family, ensuring that customers
            receive their orders on time and to the standard they desire. With
            12 permanent employees and up to 25 casual laborers available at any
            time, we have the capacity to handle larger projects for camps and
            lodges. Whether it be maintenance and repairs to existing fittings,
            installation of decks and walkways or even production of a full set
            of furnishings for a new property, we have proven time and again
            that we are able to meet and exceed customer expectations. Saytech
            welcomes orders on both a domestic and commercial level and the team
            is inspired to work with designers to bring their creative visions
            to life.
          </article>
        </section>
      </main>
    </React.Fragment>
  );
};

export default about;
