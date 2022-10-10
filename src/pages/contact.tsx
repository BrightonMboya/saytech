import Image from "next/image";
import Head from "next/head";
import { Fragment } from "react";
const contact = () => {
  return (
    <Fragment>
      <Head>
        <title>SayTech Furnitures</title>
        <meta
          name="description"
          content="Contact Us and we will get back to you in no time"
        />
        <meta property="og:image" content="/images/logo.svg" />
        <meta
          property="og:description"
          content="We are located in Arusha-Tanzania, we are focused in providing high quality furnitures to our client both national and International"
        />
        <meta property="og:title" content="Saytech Furnitures" />
      </Head>
      <section className="mt-5 font-montserrat">
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
    </Fragment>
  );
};

export default contact;
