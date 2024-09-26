import AgentFooter from "./AgentFooter";
import NavCards from "./NavCards";
import RecentPosts from "./RecentPosts";
import VinylSearch from "./VinylSearch";
import YangonRecommended from "./YangonRecommended";

const AgentDefaultPage: React.FC = () => {
  return (
    <div className="no-scrollbar w-[100%]">
      <VinylSearch /> 
      <YangonRecommended />
      <NavCards />
      <RecentPosts /> 
      <AgentFooter />
    </div>
  );
};

export default AgentDefaultPage;
