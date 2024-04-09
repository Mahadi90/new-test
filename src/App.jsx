import { useEffect, useState } from "react";
import "./App.css";

// http://localhost:5000/

function App() {
  const [data, setData] = useState([]);

  const handleSubmitApplication = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const batch = form.batch.value;
    const session = form.session.value;
    const department = form.department.value;

    console.log(name, batch, session, department);

    const info = {
      name
    };

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <div>
        <h2>Mahadi : {data.length}</h2>
        <form
          onSubmit={handleSubmitApplication}
          className="m-2 md:mx-10 bg-purple-500 p-10 min-h-96 mt-10"
        >
          <h2 className=" mb-10 text-center text-5xl font-bold">
            Application Form
          </h2>
          <div className="flex-cols md:flex space-y-4  md:space-y-0 gap-6">
            <input
              name="name"
              className="w-full p-4 rounded-md"
              type="text"
              placeholder="Enter Your Name"
            />
            <input
              name="batch"
              className="w-full p-4 rounded-md"
              type="number"
              placeholder="Enter Your Batch Number"
            />
          </div>
          <div className="flex-cols md:flex space-y-4 mt-6 md:space-y-0 gap-6">
            <input
              name="session"
              className="w-full p-4 rounded-md"
              type="text"
              placeholder="Enter Your Session"
            />
            <select name="department" className="select w-full font-bold">
              <option value="Select Department">Select Department</option>
              <option>BBA</option>
              <option>THM</option>
              <option>CHEMISTRY</option>
              <option>PHYSICS</option>
              <option>MATH</option>
              <option>STATISTICS</option>
              <option>PHARMACY</option>
              <option>GE</option>
              <option>CSE</option>
              <option>EEE</option>
              <option>EECE</option>
              <option>ARCHITECTURE</option>
              <option>CIVIL</option>
              <option>ICE</option>
              <option>URP</option>
              <option>SOCIAL WORK</option>
              <option>BANGLA</option>
              <option>ECONOMICS</option>
              <option>HISTORY</option>
              <option>PUBLIC ADMINISTRATION</option>
              <option>ENGLISH</option>
            </select>
          </div>
          <div className="mx-auto text-center mt-10">
            {" "}
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
