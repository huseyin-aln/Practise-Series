import "./App.css";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import {useState} from "react"
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";


function App() {

  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  
  
  const handleClick =  (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item])
  }

  const handleChange = (item, count) => {
    const index = cart.indexOf(item);
    const arr = cart;
    arr[index].amount += count;
    if (arr[index].amount === 0) {
      arr[index.amount] = 1
    }
    setCart([...arr]);
  }

  return (
    <div>
      <Navbar setShow={setShow} size={cart.length}/>
      {
        show ? <Main handleClick={handleClick}/> : <ShoppingCart cart={cart} setCart={setCart} handleChange={handleChange} />
      }
     
    </div>
  );
}

export default App;
