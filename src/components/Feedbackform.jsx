import Card from "./shard/Card";
import { useState } from "react";
import Button from "./shard/Button";
import Ratingselect from "./Ratingselect";

function Feedbackform({ handleAdd }) {
  const [text, settext] = useState("");
  const [btnDisabled, setbtnDisabled] = useState(true);
  const [message, setmessage] = useState("");
  const [selectRate, setselectRate] = useState(null);
  const handleTextInput = (e) => {
    if (text === "") {
      setbtnDisabled(true);
      setmessage(null);
    } else if (text !== "" && text.trim().length < 10) {
      setbtnDisabled(true);
      setmessage("The text must be at least 10 characters");
    } else {
      setbtnDisabled(false);
      setmessage(null);
    }
    settext(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedBack = {
        text: text,
        rating: selectRate,
      };
      handleAdd(newFeedBack);
    }
  };
  return (
    <Card>
      <form onSubmit={submitHandler}>
        <h2>How would you rate our service with you?</h2>
        <Ratingselect
          selectRate={(value) => {
            setselectRate(value);
          }}
        />
        <div className="input-group">
          <input
            type="text"
            value={text}
            onChange={handleTextInput}
            placeholder="Weite A revirw"
          />
          <Button type="submit" version="btn-primary" isDesabled={btnDisabled}>
            Submit
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default Feedbackform;
