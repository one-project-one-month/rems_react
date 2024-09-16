import { useState } from "react";
import RatingReview from "./RatingReview";
import { Button, Modal, Input, message } from 'antd';
import { usePostReviewMutation } from "../../../services/client/api/Review";

const App: React.FC<{ userId: number; propertyId: number }> = ({ userId, propertyId }) => {

  const [rating, setRating] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reviewText, setReviewText] = useState("");
  const [postReview, { isLoading }] = usePostReviewMutation();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    try {
      await postReview({
        userId,
        propertyId,
        rating,
        comments: reviewText,
      }).unwrap();
      message.success("Review submitted successfully");
      setIsModalOpen(false);
    } catch (error) {
      message.error("Failed to submit the review");
    }
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
        confirmLoading={isLoading}
      >
        <Input
          placeholder="Describe your experience...."
          className="h-[6rem] mt-3"
          onChange={(e) => setReviewText(e.target.value)}
        />
        <div className="mt-5 mb-3">
          <RatingReview rating={rating} setRating={setRating} />
        </div>
      </Modal>
    </div>
  );
};

export default App;
