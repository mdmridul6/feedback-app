import { v4 as uuidV4 } from "uuid";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FeebackData from "./data/Feedbackdata";
import { useState } from "react";
import Feedbacklist from "./components/Feedbacklist";
import Feedbackstate from "./components/Feedbackstate";
import Feedbackform from "./components/Feedbackform";
import AboutPage from "./pages/AboutPage";

function App() {
    const [feedback, setfeedback] = useState(FeebackData);

    const deleteFeedback = (id) => {
        setfeedback(feedback.filter((item) => item.id !== id));
    };
    const addFeedback = (newFeedBack) => {
        newFeedBack.id = uuidV4();
        setfeedback([newFeedBack, ...feedback]);
        
    };
    return (
        <>
            <Header />
            <div className="container">

                <Routes>
                    <Route path="/" element={
                        <>
                            <Feedbackform handleAdd={addFeedback} />
                            <Feedbackstate feedback={feedback} />
                            <Feedbacklist feedback={feedback} deleteFeedback={deleteFeedback} />
                        </>
                    }>

                    </Route>

                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </div>
        </>
    );
}
export default App;
