import React,{useState} from "react";

function App() {
  const [list,setValue]=useState("");
  const[items,setItmes]=useState([]);
  

  function handleChange(event){
    const newValue=event.target.value;
    setValue(newValue);
  }
  function addItem(){
    setItmes(prevItem=>{
      return [...prevItem,list]
    })
    setValue("")
  }
  
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text"   onChange={handleChange}
/>
        <button onClick={addItem} >
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
      {
        items.map((todoItem)=>{
          return <li>{todoItem}</li>
        })
      }    
        </ul>
      </div>
    </div>
  );
}

export default App;
