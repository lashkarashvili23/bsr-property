"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Card from "./Card";
import { Data } from "../Data";
import { dataArray } from "../Data";

interface ViewAllSectionProps {
  data: Data[];
}

const ViewAllSection: React.FC<ViewAllSectionProps> = (data) => {
  let router = useRouter(); // Initialize the router
  // Slicing the first 12 objects from dataArray
  const firstFourItems = dataArray.slice(0, 12);
  const handleCardClick = (item: Data) => {
    router.push(`/pages/${item.id}`); // Navigate to the detail page with the item's id
  };
  return (
    <>
      <div className="bg-slate-100 flex flex-col items-center text-xl h-full w-4/5 pt-4">
        <div className="bg-slate-100 w-full flex flex-wrap justify-between">
          {firstFourItems.map((item, index) => (
            <Card
              key={index}
              img={item.img}
              title={item.title}
              price={item.price}
              info={item.info}
              address={item.address}
              onClick={() => handleCardClick(item)} // Pass the click handler
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ViewAllSection;
