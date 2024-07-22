"use client";
import { usePathname } from "next/navigation";
import { dataArray } from "@/app/Data";
import Header from "@/app/components/Header";
import Search from "@/app/components/Search";

const DetailPage = () => {
  const pathname = usePathname();
  const id = pathname.slice(7);

  // Find the item with the matching id
  const item = dataArray.find((data) => data.id === id);

  if (!item) {
    return (
      <>
        <div>Item not found</div>
        <div>{pathname}</div>
        <div>{id}</div>
      </>
    );
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
            <p className="text-xl pb-2">{item.price} $</p>
            <p className="text-lg pb-2">{item.info}</p>
            <p>{item.address}</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DetailPage;
