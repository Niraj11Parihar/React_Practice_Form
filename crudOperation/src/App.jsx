import './App.css';
import FeedBack from "./assets/components/feedback"


function App() {
  return (
    <>
        <FeedBack/>

      {/* <div className="container w-1/2  h-screen m-auto p-4">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="text-2xl font-bold mb-4 text-center">Registration Form</h1>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name:
            </label>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="name" 
              type="text" 
              placeholder="Enter your name" 
              name="name"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email:
            </label>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="email" 
              type="email" 
              placeholder="Enter your email" 
              name="email"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password:
            </label>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="password" 
              type="password" 
              placeholder="Enter your password" 
              name="password"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Gender:
            </label>
            <div className="flex items-center">
              <input 
                className="mr-2 leading-tight" 
                id="male" 
                type="radio" 
                name="gender" 
                value="male"
              />
              <label className="text-gray-700 text-sm" htmlFor="male">Male</label>
              <input 
                className="mr-2 ml-4 leading-tight" 
                id="female" 
                type="radio" 
                name="gender" 
                value="female"
              />
              <label className="text-gray-700 text-sm" htmlFor="female">Female</label>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
              City:
            </label>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="city" 
              type="text" 
              placeholder="Enter your city" 
              name="city"
            />
          </div>

          <div className="flex items-center justify-between">
            <button 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
      </div> */}

      
    </>
  );
}

export default App;
