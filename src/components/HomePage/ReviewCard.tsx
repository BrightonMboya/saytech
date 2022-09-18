import React, { useState } from "react";
import Image from "next/image";
import { reviews } from "../../data/dummy";

export default function ReviewCard() {
  return (
    <section className="">
      {reviews.map((review) => {
        return (
          <div
            className="bg-[#f0f0f0] w-[300px] h-full rounded-md"
            key={review.id}
          >
            <div className="flex items-center pt-4 pl-3">
              <div className="relative w-[70px] h-[70px] border-[3px] border-orange rounded-full">
                <Image
                  src={review.image}
                  layout="fill"
                  alt=""
                  className="rounded-full"
                />
              </div>
              <div className="text-sm ml-3 flex flex-col">
                <h3 className="text-xl">{review.author}</h3>
                <p className="text-[#7d7d7d] font-medium">{review.location}</p>
              </div>
            </div>
            <p className="text-[13px] mx-4 pt-2">{review.review}</p>
            <p className="mx-4 mt-3 text-[#7d7d7d] font-medium mb-3">
              {review.date}
            </p>
          </div>
        );
      })}
    </section>
  );
}

{
  /* <div className="bg-[#f0f0f0] w-[300px] h-full rounded-md">
              <div className="flex items-center pt-4 pl-3">
                <div className="relative w-[70px] h-[70px] border-[3px] border-orange rounded-full">
                  <Image
                    src="/images/avatar.jpg"
                    layout="fill"
                    alt=""
                    className="rounded-full"
                  />
                </div>
                <div className="text-sm ml-3 flex flex-col">
                  <h3 className="text-xl">Nathalie Rebecca</h3>
                  <p className="text-[#7d7d7d] font-medium">from Masai Mara</p>
                </div>
              </div>
              <p className="text-[13px] mx-4 pt-2">
                I loved this experience so much. Before I even started working
                with SayTech, I loved how much detail in the process. Then
                finally when I started working with my designer, she made it
                easy for me to see the vision and so many different options
                price wise for what I loved
              </p>
              <p className="mx-4 mt-3 text-[#7d7d7d] font-medium mb-3">
                8th January 2022
              </p>
            </div> */
}
