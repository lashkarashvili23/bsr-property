import React from "react";
import Image from "next/image";
import { FaBuilding, FaMapMarkerAlt, FaTags } from "react-icons/fa";

interface CardProps {
  img: string;
  title: string;
  price: number;
  info: string;
  address: string;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({
  img,
  title,
  price,
  info,
  address,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="w-1/5 h-auto flex flex-col items-center justify-center rounded-t-lg overflow-hidden mx-5 my-5 border border-inherit cursor-pointer"
    >
      <div className="w-full h-4/5 ">
        <Image
          className=""
          src={img}
          width={500}
          height={500}
          alt={title}
          priority
        />
      </div>
      <div
        id="card-info"
        className="flex flex-col items-start w-full h-26 bg-slate-100 text-base p-2 "
      >
        <div>{title}</div>
        <div>
          <div className="flex pt-2">
            <span className="pr-2 text-zinc-500 mt-1">
              <FaTags />
            </span>
            <span>{price} $</span>
          </div>
        </div>
        <div className="text-sm">
          <div className="flex mt-1">
            <span className="pr-2 text-zinc-500 mt-1">
              <FaBuilding />
            </span>
            <span> {info}</span>
          </div>
        </div>
        <div className="text-sm">
          <div className="flex mt-1">
            <span className="pr-2 text-zinc-500 mt-1">
              <FaMapMarkerAlt />
            </span>
            <span>{address}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
