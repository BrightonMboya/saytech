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
      </main>
    </React.Fragment>
  );
};

export default about;
