import React, { useEffect, useState } from "react";
import FeedBack from "./feedback"


const Form = () => {
  const [input, setInput] = useState({});
  const [list, setList] = useState([]);

  // Set the value in the object 
  function handleInput(e) {
    let { name, value } = e.target;
    setInput({ ...input, [name]: value });
  }

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("data")) || [];
    setList(data);
  }, []); 

  // save the data in localstorage 
  function handleSubmition(e) {
    e.preventDefault();

    let newList = [...list, input]; 
    setList(newList); 
    localStorage.setItem("data", JSON.stringify(newList)); 
    setInput({})
  }

  function deleteData(pos){
      list.splice(pos, 1);
      let newList = [...list];
      setList(newList);
      localStorage.setItem('data', JSON.stringify(newList));
  }

  return (
    <>
      <div className="container">
      <div className="row border p-3 border-dark-subtle my-4">
        <h2 className="text-success">Registration Form</h2>
        <form method="post" className="w-100" onSubmit={handleSubmition}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label fw-bold fs-5">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={handleInput}
              value={input.name || ""}
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-bold fs-5">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={handleInput}
              value={input.email || ""}
              placeholder="name@example.com"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-bold fs-5">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={input.password || ""}
              onChange={handleInput}
              rows="3"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label fw-bold fs-5">
              Message
            </label>
            <textarea
              className="form-control"
              name="message"
              value={input.message || ""}
              onChange={handleInput}
              rows="3"
            ></textarea>
          </div>

          <button type="submit" className="btn btn-outline-success">
            Submit
          </button>
        </form>
      </div>
      </div>

      {/* <FeedBack/> */}


      <div className="container mt-5">
        <div className="row">
          {list.length > 0 ? (
            list.map((v, i) => (
              <div className="col-md-4 mb-4" key={i}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">User {i + 1}</h5>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <strong>Name:</strong> {v.name}
                      </li>
                      <li className="list-group-item">
                        <strong>Email:</strong> {v.email}
                      </li>
                      <li className="list-group-item">
                        <strong>Password:</strong> {v.password}
                      </li>
                      <li className="list-group-item">
                        <strong>Message:</strong> {v.message}
                      </li>
                      <li className="list-group-item">
                          <button onClick={() => deleteData(i)}>Delete</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No users to display.</p>
          )}
        </div>
      </div>

     
    </>
  );
};

export default Form;
