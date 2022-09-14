import "./App.css";
import { userValidation } from "./validation";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = async (e) => {
    e.preventDefault();
    let formData = {
      name: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
    };
    console.log(formData);

    const isValid = await userValidation.isValid(formData);
    console.log(isValid);
  };

  return (
    <div className="container mt-4 text-center w-100 h-100 d-flex flex-column justify-content-center align-items-center">
      <form className="form text-white" style={{ margin: '5rem' }} onSubmit={createUser}>
        <label htmlFor="username" className="form-label">
          Username <span className="text-danger mt-3"> {username}</span>
        </label>
        <input
          type="text"
          className="mt-3"
          placeholder="enter your name..."
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value) }
        />
        <label htmlFor="email" className="form-label mt-3">
          Email address <span className="text-danger ">{email}</span>
        </label>
        <input
          type="email"
          className="mt-3"
          placeholder="enter your email..."
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password" className="form-label mt-3">
          Password
        </label>
        <input
          type="password"
          className="mt-3"
          placeholder="enter your password..."
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" className="submit mt-5" />
      </form>
    </div>
  );
}

export default App;
