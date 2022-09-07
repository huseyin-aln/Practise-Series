import "./App.css";
import {useState, useEffect} from "react"

function App() {

  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(3);
  
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=british")
    .then(res => res.json())
    .then(data => setItems(data.meals))
  }, []);
  
const handleClick = () => {
  setVisible(item => item += 3)
}

  return (
    <div className="App">
      <h1 className="header">British Meals 
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Great_Britain_%281707%E2%80%931800%29.svg/2560px-Flag_of_Great_Britain_%281707%E2%80%931800%29.svg.png" alt="" />
      </h1>
      <div className="container">
        {items.slice(0,visible).map(item => (
          <div className="card">
            <div className="image">
              <img src={item.strMealThumb} alt="" />
            </div>
            <p>{item.strMeal}</p>
          </div>
        ))}
        <button onClick={handleClick}>Click for More Meals</button>
      </div>
      
    </div>
  );
}

export default App;
