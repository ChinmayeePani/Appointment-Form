import "./App.css";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div>
      <nav className="navbar">
        <h1 className="h1">Appointment Form</h1>
      </nav>

      <div className="form_container">
        <form className="form" onSubmit={handleSubmit}>
          <label className="label">NAME:</label>
          <input
            type="text"
            className="input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label className="label">EMAIL:</label>
          <input type="text" className="input" />

          <label className="label">PHONE NUMBER:</label>
          <input type="text" className="input" />

          <div className="box">
          <label className="label">CHOOSE DATE:</label>
          <input type="date" className="input" />

          <label className="label">CHOOSE TIME:</label>
          <input type="time" className="input" />
          </div>

          {/* <div className='boxNew'> */}
          <label className="label">COMMENTS:</label>
          <input type="text" className="inputs" />
          {/* </div> */}

          <button className="btn" type="submit">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
