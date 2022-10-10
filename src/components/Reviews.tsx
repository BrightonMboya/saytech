import React from "react";
import ReviewCard from "./HomePage/ReviewCard";
import Image from "next/image";
// import reviews from "../data/dummy";

export default function Reviews() {
  return (
    <React.Fragment>
      <div>
        <h3 className="text-center mt-[3rem] md:text-lg font-medium">
          A glimpse of our previous customers
        </h3>
        <div className="flex items-center justify-center mt-4 gap-4 md:gap-[1rem]">
          <div className="relative h-[50px] w-[100px] md:mr-5">
            <Image src="/images/serena.svg" alt="" layout="fill" />
          </div>
          <div className="relative h-[50px] w-[100px]">
            <Image src="/images/serena.svg" alt="" layout="fill" />
          </div>
          <div className="relative h-[50px] w-[100px] md:ml-5">
            <Image src="/images/serena.svg" alt="" layout="fill" />
          </div>
        </div>
      </div>
      <section>
        <div className="flex flex-col md:flex-row gap-2 md:gap-6 items-center justify-center pt-[3rem] md:items-baseline">
          <div className="items-center justify-center flex flex-col">
            <h3 className="text-[20px]">Reviews</h3>
            <p className="text-[30px] font-medium">+ 500 happy</p>
            <p className="text-4xl text-orange font-medium">clients</p>
          </div>

          <div className="mt-[2rem]">
            <ReviewCard />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
