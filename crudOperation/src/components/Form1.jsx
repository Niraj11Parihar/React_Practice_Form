import React, { useEffect, useState } from "react";
import { RatingComponent } from "react-rating-emoji";
import "react-rating-emoji/dist/index.css";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [input, setInput] = useState({});
  const [list, setList] = useState([]);
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();

  // set the value in the object
  function handleInput(e) {
    let { name, value } = e.target;
    setInput({ ...input, [name]: value });
  }

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("data")) || [];
    setList(data);

    // const storedRating = JSON.parse(localStorage.getItem("emojiRating"));
    // if (storedRating) {
    //   setRating(storedRating);
    // }  
  }, []);

  function handleInput(e) {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  }

  function handleSubmission(e) {
    e.preventDefault();
    const updatedInput = { ...input, rating };

    let newList = [...list, updatedInput];
    setList(newList);
    localStorage.setItem("data", JSON.stringify(newList));
    setInput({});
    setRating(0);

    navigate('/UserData')

  }

  function handleRating(newRating) {
    setRating(newRating);
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <div className="border p-6 border-gray-300 my-8">
          <h2 className="text-green-500 text-2xl font-bold mb-4">Registration Form</h2>
          <form method="post" className="w-full" onSubmit={handleSubmission}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-semibold mb-2">Name</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                name="name"
                onChange={handleInput}
                value={input.name || ""}
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-semibold mb-2">Email address</label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded"
                name="email"
                onChange={handleInput}
                value={input.email || ""}
                placeholder="name@example.com"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-lg font-semibold mb-2">Message</label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded"
                name="message"
                onChange={handleInput}
                value={input.message || ""}
                rows="3"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="rating" className="block text-lg font-semibold mb-2">Rate Us</label>
              <RatingComponent rating={rating} onClick={handleRating} />
            </div>

            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
