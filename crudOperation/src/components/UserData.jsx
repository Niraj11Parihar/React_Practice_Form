import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { RatingComponent } from "react-rating-emoji";
import { useNavigate } from "react-router-dom";

export default function UserData() {
  const [list, setList] = useState([]); 
  const navigate = useNavigate();


  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("data")) || [];
    setList(data);
  }, []);

    function DeleteData(index) {
      const newList = list.filter((_, i) => i !== index);
      setList(newList);
      if (newList.length === 0){
        navigate("/");
      }
      localStorage.setItem("data", JSON.stringify(newList));
    }

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {list.length > 0 ? (
            list.map((v, i) => (
              <div className="mb-4" key={i}>
                <div className="border border-gray-300 rounded-lg shadow-lg">
                  <div className="p-4">
                    <h5 className="text-xl font-semibold mb-4">User {i + 1}</h5>
                    <ul className="space-y-2">
                      <li>
                        <strong>Name:</strong> {v.name}
                      </li>
                      <li>
                        <strong>Email:</strong> {v.email}
                      </li>
                      <li>
                        <strong>Message:</strong> {v.message}
                      </li>
                      <li>
                        <strong>Rating:</strong>{" "}
                        <RatingComponent rating={v.rating} />
                      </li>
                      <li>
                        <button
                          onClick={() => DeleteData(i)}
                          className="bg-rose-700  p-2 rounded-xl mt-3 hover:bg-rose-500"
                        >
                          Delete
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No users to display.</p>
          )}
        </div>
      </div>
    </>
  );
}
