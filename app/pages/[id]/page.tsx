"use client";
import { usePathname } from "next/navigation";
import { notFound } from "next/navigation";
import { FaBuilding, FaMapMarkerAlt, FaTags } from "react-icons/fa";
import { dataArray } from "@/app/Data";
import Header from "@/app/components/Header";
import Search from "@/app/components/Search";

const DetailPage = () => {
  const pathname = usePathname();
  const id = pathname.slice(7);

  // Find the item with the matching id
  const item = dataArray.find((data) => data.id === id);

  if (!item) {
    return notFound();
  }

  return (
    <main className="flex min-h-screen flex-col items-center  p-0 bg-slate-100">
      <Header />
      <Search />
      <section className="w-4/5 flex justify-center">
        <div className="w-3/4 mt-10 flex justify-center">
          <div className="w-3/4">
            <img src={item.img} alt={item.title} />
          </div>
          <div className="w-2/4 ml-10">
            <h1 className="text-2xl pb-2">{item.title}</h1>
            <div className="text-xl pb-2 flex">
              <span className="pr-2 mt-1 text-zinc-500">
                <FaTags />
              </span>
              {item.price} $
            </div>
            <div className="text-lg pb-2 flex">
              <span className="pr-2 mt-1 text-zinc-500">
                <FaBuilding />
              </span>
              {item.info}
            </div>
            <div className="pb-2 flex">
              <span className="pr-2 mt-1 text-zinc-500">
                <FaMapMarkerAlt />
              </span>
              {item.address}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DetailPage;
