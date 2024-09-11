import { useState } from "react";
import { FaStar } from "react-icons/fa";

function FeedBack() {
  const [rating, setRating] = useState(0); 
  const [hover, setHover] = useState(null);
  const [description, setDescription] = useState(""); 
  const [feedback, setFeedback] = useState([]); 

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFeedback = { rating, description };
    setFeedback([...feedback, newFeedback]);


    setRating(0);
    setDescription("");
  };

  return (
    <>
      <center>
        <div className="container h-screen">
          <form className="w-1/2 m-auto border border-red-950" onSubmit={handleSubmit}>
            <h1 className="m-auto border border-red-950">FeedBack Form</h1>
            <div className="border flex justify-evenly border-red-950 p-3 bg-slate-300">
              <label className="text-gray-800 font-bold">Rating</label>
              {[...Array(5)].map((_, index) => {
                const starValue = index + 1;
                return (
                  <FaStar
                    key={index}
                    size={30}
                    className={`cursor-pointer ${
                      starValue <= (hover || rating) ? "text-yellow-500" : "text-gray-400"
                    }`}
                    onClick={() => setRating(starValue)} 
                    onMouseEnter={() => setHover(starValue)} 
                    onMouseLeave={() => setHover(null)} 
                  />
                );
              })}
            </div>
            <div className="border border-red-950 p-3 flex justify-evenly bg-slate-300">
              <label className="text-gray-800 font-bold">Description</label>
              <textarea
                className="border border-gray-300"
                cols={25}
                value={description}
                onChange={(e) => setDescription(e.target.value)} 
              />
            </div>
            <div className="p-3 border border-red-950">
              <input type="submit" className="bg-slate-400 px-8 cursor-pointer" value="Submit" />
            </div>
          </form>

          {feedback.length > 0 && (
            <div className="w-1/2 m-auto mt-8">
              {feedback.map((item, index) => (
                <div key={index} className="border p-3 bg-white shadow-md mb-4">
                  <h2 className="font-bold">Feedback {index + 1}</h2>
                  <div className="flex items-center">
                    <p className="mr-2">Rating:</p>
                    {[...Array(item.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-500" />
                    ))}
                  </div>
                  <p className="mt-2">
                    <strong>Description:</strong> {item.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </center>
    </>
  );
}

export default FeedBack;
