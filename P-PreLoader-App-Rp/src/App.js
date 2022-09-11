import "./App.css";
import {useState, useEffect} from "react";
import RingLoader from "react-spinners/RingLoader";



function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, []);
  
  return (
    <div className="App">
      {
        loading ?
        <RingLoader color={"#5CCFEE"} loading={loading}  size={200} />
        :
        <img src="http://www.parzlogic.com/wp-content/uploads/2017/10/web-dev.jpg" alt="img" />
      }
    </div>
  );
}

export default App;
