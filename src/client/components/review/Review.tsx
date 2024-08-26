import { useState } from "react";
import RatingReview from "./RatingReview";
import { Button, Modal, Input } from 'antd';


const Review: React.FC = () => {
  const [rating, setRating] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (

    <div>
      <Button type="link" onClick={showModal}>
        Review
      </Button>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        title="Review"
      >
        
        <Input
          placeholder="Name....."
          className=" mt-5 "

        />
        <Input
          placeholder="Describe your experience...."
          className="h-[3rem] mt-3"
        />
        <div className="mt-5 mb-3 b">
          <p ><RatingReview rating={rating} setRating={setRating} /></p>
        </div>
      </Modal>
    </div>

  );
};

export default Review;
