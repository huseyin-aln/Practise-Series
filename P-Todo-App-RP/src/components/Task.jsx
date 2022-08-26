import React, {useState} from "react";

function Task() {

    const [newItem, setNewItem] = useState("")
    const [items, setItems] = useState([])
  
    const addItem = () => {
      if (!newItem) {
        alert("enter an item")
        return;
      }
      const item = {
        id : Math.floor(Math.random() * 1000),
        value : newItem
      }
      setItems(oldItems => [...oldItems, item])
      setNewItem("")
    }
  
  const deleteItem = (id) => {
    const newArr = items.filter(item => item.id !== id)
    setItems(newArr)
  }
  
    return (
      <div className="App">
        <h1>Todo List App</h1>
  
        <input type="text" 
        placeholder="add an item.." 
        value={newItem}  
        onChange={e => setNewItem(e.target.value)}/>
  
        <button onClick={() => addItem()}>Add</button>
  
        <ul>
          {items.map(item => {
            return(
              <li key={item.id}>
                {item.value} 
                <button onClick={() => deleteItem(item.id)}>
                  X
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }

  export default Task