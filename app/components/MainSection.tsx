import Card from "./Card";

export default function MainSection() {
  return (
    <>
      <div className="bg-slate-100 flex flex-col items-center  text-xl h-96 w-4/5">
        <div className="flex flex-row items-start justify-between w-full p-4">
          <h2>Sales announcements</h2>
          <button>View all</button>
        </div>
        <div className="bg-slate-100 w-full flex ">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}
