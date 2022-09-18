import React from "react";
import Image from "next/image";

const HeroCard = () => {
  return (
    <React.Fragment>
      <section className="h-[50vh] carousel w-full">
        <div className="carousel-item relative w-full"></div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </section>
    </React.Fragment>
  );
};

export default HeroCard;
