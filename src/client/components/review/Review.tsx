import { useState } from "react";
import RatingReview from "./RatingReview";
import { Input , Card, Space} from "antd";

 {/* <RatingReview rating={rating} setRating={setRating} /> */}
  // const [rating, setRating] = useState(0);

  
  

const Review: React.FC  = () => {
  return (
    <div className="mt-[3rem] h-full mx-[5rem]">
      <div className="flex w-[20rem]"> 
      <Input placeholder="write comment  " />

      </div>

      <Space direction="vertical" size={16}>
    <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
      <p></p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
    
    </Space>
     
    </div>
  );
};

export default Review;
