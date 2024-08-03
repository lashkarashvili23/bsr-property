"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Card from "./Card";
import { supabase } from "../supabaseClient";

export type Data = {
  id: string;
  img: string;
  title: string;
  price: number;
  info: string;
  address: string;
};

const MainSection = () => {
  const [apartments, setApartments] = useState<Data[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter(); // Initialize the router

  useEffect(() => {
    const fetchApartments = async () => {
      const { data, error } = await supabase.from("apartments").select("*");

      if (error) {
        console.error("Error fetching apartments:", error);
      } else {
        setApartments(data);
      }
      setLoading(false);
    };

    fetchApartments();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleCardClick = (item: Data) => {
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
          {apartments.slice(0, 4).map((apartment) => (
            <Card
              key={apartment.id}
              img={apartment.img}
              title={apartment.title}
              price={apartment.price}
              info={apartment.info}
              address={apartment.address}
              onClick={() => handleCardClick(apartment)} // Pass the click handler
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default MainSection;
