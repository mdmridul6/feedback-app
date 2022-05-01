import Card from "./shard/Card";
import { FaTimes } from "react-icons/fa";

function FeedBackItem({ item, deleteFeedback }) {
  return (
    <>
      <Card reverse={true}>
        <div className="num-display">{item.rating}</div>
        <button className="close" onClick={() => deleteFeedback(item.id)}>
          <FaTimes color="purple"></FaTimes>
        </button>
        <div className="text-display">{item.text}</div>
      </Card>
    </>
  );
}

export default FeedBackItem;
