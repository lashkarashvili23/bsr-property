"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Card from "./Card";
import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

export type Data = {
  id: string;
  img: string;
  title: string;
  price: number;
  info: string;
  address: string;
};

const ViewAllSection = () => {
  const [apartments, setApartments] = useState<Data[]>([]);
  const [loading, setLoading] = useState(true);

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
  const router = useRouter(); // Initialize the router
  const handleCardClick = (item: Data) => {
    router.push(`/pages/${item.id}`); // Navigate to the detail page with the item's id
  };
  return (
    <>
      <div className="bg-slate-100 flex flex-col items-center text-xl h-full w-4/5 pt-4">
        <div className="bg-slate-100 w-full flex flex-wrap justify-between">
          {apartments.map((apartment) => (
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

export default ViewAllSection;
