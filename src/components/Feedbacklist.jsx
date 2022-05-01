import FeedBackItem from "./FeedBackItem";

function Feedbacklist({ feedback, deleteFeedback }) {
  return feedback.map((item, index) => (
    <FeedBackItem key={index} item={item} deleteFeedback={deleteFeedback} />
  ));
}

export default Feedbacklist;
