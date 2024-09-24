import { FaSearch } from "react-icons/fa";
import VinylSearch from "./VinylSearch";
import YangonRecommended from "./YangonRecommended";

const AgentDefaultPage = () => {
  return (
    <div className="no-scrollbar">
      <VinylSearch /> 
      <YangonRecommended />
      <div className="carousel-with-yangoncity flex justify-center items-center font-bold text-2xl bg-green-300 h-[200px]">
        3 Cards
      </div>
      <div className="carousel-with-yangoncity flex justify-center items-center font-bold text-2xl bg-gray-500 h-[200px]">
        All Cards
      </div>
      <div className="carousel-with-yangoncity flex justify-center items-center font-bold text-2xl bg-teal-800 h-[200px]">
        Footer
      </div>
    </div>
  );
};

export default AgentDefaultPage;
