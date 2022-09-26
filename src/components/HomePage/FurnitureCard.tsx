import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  image: string;
  href: string;
}

export default function FurnitureCard(props: Props) {
  return (
    <div className="relative w-[300px] h-[300px] mt-[2rem] rounded-md">
      <Image
        src={props.image}
        alt=""
        layout="fill"
        className="rounded-md "
        objectFit="cover"
      />
      <div className="bg-orange rounded-md h-[60px] w-[230px] cursor-pointer flex items-center justify-center absolute top-[120px] left-[40px]">
        <Link href={props.href}>
          <h3 className="text-white font-medium text-xl tracking-loose uppercase">
            {props.title}
          </h3>
        </Link>
      </div>
    </div>
  );
}
