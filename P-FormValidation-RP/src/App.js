import "./App.css";
import {userValidation} from "./validation"

function App() {

  const createUser = async (e) => {
    e.preventDefault();
    let formData = {
      name : e.target[0].value,
      email : e.target[1].value,
      password : e.target[2].value,
    }
    console.log(formData);

    const isValid = await userValidation.isValid(formData);
    console.log(isValid);
    
  }
  

  return (

    <div className="App">

      <form className="form" onSubmit={createUser} >

        <input type="text" placeholder="enter your name..." />
        <input type="email" placeholder="enter your email..." />
        <input type="password" placeholder="enter your password..." />
        <input type="submit" className="submit"/>

      </form>
      
    </div>
  );
}

export default App;
