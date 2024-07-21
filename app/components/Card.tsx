import React from "react";
import Image from "next/image";

interface CardProps {
  img: string;
  title: string;
  price: number;
  info: string;
  address: string;
}

const Card: React.FC<CardProps> = ({ img, title, price, info, address }) => {
  return (
    <div className="w-1/5 h-auto flex flex-col items-center justify-center rounded-t-lg overflow-hidden mx-5 my-5 border border-inherit">
      <div className="w-full h-4/5 ">
        <Image className="" src={img} width={500} height={500} alt={title} />
      </div>
      <div
        id="card-info"
        className="flex flex-col items-start w-full h-26 bg-slate-100 text-base p-2 "
      >
        <div>{title}</div>
        <div>{price} $</div>
        <div className="text-sm">{info}</div>
        <div className="text-sm">{address}</div>
      </div>
    </div>
  );
};

export default Card;
