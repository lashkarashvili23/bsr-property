import React from "react";
import Card from "./Card";
import { Data } from "../Data";
import { dataArray } from "../Data";

interface MainSectionProps {
  data: Data[];
}

const MainSection: React.FC<MainSectionProps> = ({ data }) => {
  return (
    <>
      <div className="bg-slate-100 flex flex-col items-center  text-xl h-96 w-4/5">
        <div className="flex flex-row items-start justify-between w-full p-4">
          <h2>Sales announcements</h2>
          <button>View all</button>
        </div>
        <div className="bg-slate-100 w-full flex ">
          {dataArray.map((item, index) => (
            <Card
              key={index}
              img={item.img}
              title={item.title}
              price={item.price}
              info={item.info}
              address={item.address}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default MainSection;
