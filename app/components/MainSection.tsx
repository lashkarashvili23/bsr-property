"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Card from "./Card";
import { Data } from "../Data";
import { dataArray } from "../Data";

interface MainSectionProps {
  data: Data[];
}

const MainSection: React.FC<MainSectionProps> = (data) => {
  const router = useRouter(); // Initialize the router
  // Slicing the first four objects from dataArray
  const firstFourItems = dataArray.slice(0, 4);
  const handleCardClick = (item: Data) => {
    console.log("Card clicked:", item);
    router.push(`/pages/${item.id}`); // Navigate to the detail page with the item's id
  };

  return (
    <>
      <div className="bg-slate-100 flex flex-col items-center  text-xl h-96 w-4/5">
        <div className="flex flex-row items-start justify-between w-full p-4">
          <h2>Sales announcements</h2>
          <Link href="/view-all">View all</Link>
        </div>
        <div className="bg-slate-100 w-full flex justify-between">
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

export default MainSection;
