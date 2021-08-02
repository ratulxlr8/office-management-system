import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import User from "./Components/User/User";

function App() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div className="App">
      <Home></Home>
      <User user={user}></User>
    </div>
  );
}

export default App;
