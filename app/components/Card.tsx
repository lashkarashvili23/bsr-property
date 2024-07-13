import Image from "next/image";
export default function Card() {
  return (
    <>
      <div className="w-1/4 h-full flex flex-col items-center justify-center rounded-t-lg overflow-hidden mx-3 border border-inherit">
        <div className="w-full h-4/5 ">
          <Image
            className=""
            src="/test.jpg"
            width={500}
            height={500}
            alt="test"
          />
        </div>
        <div
          id="card-info"
          className="flex flex-col items-start w-full h-26 bg-slate-100 text-base p-2 "
        >
          <div>3 room apartment for sale</div>
          <div>75,000 $</div>
          <div className="text-sm">flor, rooms, bedrooms etc.</div>
          <div className="text-sm">Ilia Chavchavadze Avenue</div>
        </div>
      </div>
    </>
  );
}
