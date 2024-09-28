
import React from "react";
import YangonCard from "./components/YangonCard";

const YangonRecommended = () => {
  return (
    <div className="carousel-with-yangoncity font-bold text-2xl h-[200px] w-[80%] mx-auto py-10">
      <h1>Homes In Yangon.</h1>
      <YangonCard />
    </div>
  );
};

export default YangonRecommended;
