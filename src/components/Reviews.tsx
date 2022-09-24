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
      <section className="mt-5">
        <h3 className="text-center text-2xl font-medium pt-5">Contact Us </h3>
        <form
          method="POST"
          action="https://getform.io/f/9995d4d6-9157-45cb-8bce-3faf6ea15093"
          className="flex flex-col md:flex-row items-center justify-center"
        >
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-2 gap-0 md:gap-3 mt-[2rem] mx-4">
              <div className="relative h-[155px] w-[142px] ">
                <Image
                  src="https://res.cloudinary.com/dhhcantbj/image/upload/v1663762962/office/IMG_7091_wwuc99.jpg"
                  alt=""
                  layout="fill"
                  className="rounded-md"
                />
              </div>
              <div className="relative h-[320px] w-[142px]  row-span-2 mr-8">
                <Image
                  src="/images/img_1.jpg"
                  alt=""
                  layout="fill"
                  className="rounded-md"
                />
              </div>
              <div className="relative h-[155px] w-[142px] ">
                <Image
                  src="https://res.cloudinary.com/dhhcantbj/image/upload/v1663757921/livingroom/IMG_7089_id2el4.jpg"
                  alt=""
                  layout="fill"
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col mt-3">
              <label className="text-[14px]">Family Name</label>
              <input
                type="text"
                className="border-[1px] border-slate-300 rounded-sm focus:outline-none w-[280px] bg-transparent"
                placeholder="Nuran"
              />
            </div>
            <div className="flex flex-col mt-[1.5rem]">
              <label className="text-[14px]">First Name</label>
              <input
                type="text"
                className="border-[1px] border-slate-300 rounded-sm focus:outline-none w-[280px] bg-transparent"
                placeholder="Izza"
              />
            </div>
            <div className="flex flex-col mt-[1.5rem]">
              <label className="text-[14px]">Email</label>
              <input
                type="email"
                className="border-[1px] border-slate-300 rounded-sm focus:outline-none w-[280px] bg-transparent"
                placeholder="izza@gmail.com"
              />
            </div>

            <button className="btn bg-brown mt-3 border-none" type="submit">
              Send Request
            </button>

            <h3 className="mt-4">
              We don&apos;t make, <span className="text-orange">We build.</span>
            </h3>
          </div>
        </form>
      </section>
    </React.Fragment>
  );
}
