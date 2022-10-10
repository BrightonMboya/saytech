import Image from "next/image";
import NavBar from "./NavBar";

const HeroImage = () => {
  return (
    <section className="h-[100vh] relative bg-gradient-to-t from-[#0f2027] via-[#4c7f91] to-[#2c5364]">
      <div className="flex items-center justify-between mr-4 ">
        <div className="w-[176px] h-[66px] relative">
          <Image
            src="/images/logo.svg"
            layout="fill"
            alt="logo"
            quality={100}
          />
        </div>

        <NavBar />
      </div>

      {/* <div className="flex items-center justify-center">
        <div className="absolute  -left-[40px] top-[30%] w-60 h-60 bg-purple-300 rounded-full mix-blend-multiply filter blur opacity-20 animate-blob" />
        <div className="absolute top-[35%] w-60 h-60 bg-orange rounded-full filter blur opacity-10 animate-blob animation-delay-2000 mix-blend-multiply" />
        <div className="absolute top-[30%] -right-[0%] w-60 h-60 bg-pink-300 rounded-full  filter blur opacity-5 animate-blob animation-delay-4000 " />
      </div> */}

      <div className="relative flex flex-col items-center justify-center h-[80vh]">
        <div className="w-[250px] h-[150px] relative">
          <Image
            src="/images/logo.svg"
            layout="fill"
            alt="logo"
            quality={100}
          />
        </div>
        <div className="flex items-center justify-center ">
          <div className="absolute  -left-[40px] md:left-[20%] xl:left-[25%] 2xl:left-[33%] top-[30%] w-60 h-60 bg-purple-300 rounded-full mix-blend-multiply filter blur opacity-20 animate-blob" />
          <div className="absolute top-[35%] w-60 h-60 bg-orange rounded-full filter blur opacity-10 animate-blob animation-delay-2000 mix-blend-multiply" />
          <div className="absolute top-[30%] -right-[0%] md:right-[20%] xl:right-[25%] 2xl:right-[33%] w-60 h-60 bg-pink-300 rounded-full  filter blur opacity-5 animate-blob animation-delay-4000 " />
        </div>
        <h3 className="text-2xl text-white">We don&apos;t make,</h3>
        <h3 className="text-orange font-medium text-5xl">We build.</h3>
      </div>
    </section>
  );
};

export default HeroImage;
