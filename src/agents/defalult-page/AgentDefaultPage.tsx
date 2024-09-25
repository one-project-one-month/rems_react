import NavCards from "./NavCards";
import VinylSearch from "./VinylSearch";
import YangonRecommended from "./YangonRecommended";

const AgentDefaultPage: React.FC = () => {
  return (
    <div className="no-scrollbar w-[100%]">
      <VinylSearch /> 
      <YangonRecommended />
      <NavCards />
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
