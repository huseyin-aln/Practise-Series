import "./App.css";
import axios from 'axios'
import {useState, useEffect} from 'react'



function App() {

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const getProfile = async () => {
    try {
      const res = await axios.get("https://randomuser.me/api")
      // console.log(res);
      setName(`${res.data.results[0].name.first} ${res.data.results[0].name.last}`)
      setImage(res.data.results[0].picture.large)
      setEmail(res.data.results[0].email)
      setPhone(res.data.results[0].cell)
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    getProfile();
  }, []);
  
  return (

    <div className="App">
      <div className="container">
        <img src={image} alt="" />
        <h1>{name}</h1>
        <p>{email}</p>
        <p>{phone}</p>
        <button onClick={getProfile}>Click for Random Profile</button>
      </div>
     
    </div>
  );
}

export default App;
