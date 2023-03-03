import React, { useState } from "react";
import './App.css';

function App() {
    const [newItem, setNewItem] = useState("");
    const [items, setItems] = useState([]);
    
/*------------------------------------------------------*/

    function addItem() {

        if (!newItem) {
            alert("Add an item!")
            return;
        }

        const item = {
            id: Math.floor(Math.random()* 1000),
            value: newItem
        };

        setItems(oldList => [...oldList, item]);
        setNewItem("");

    }

    /*------------------------------------------------------*/

    function deleteItem(id) {
        const newArray = items.filter(x => x.id !=+ id);
        setItems(newArray);
    }
    //console.log(newItem);

    /*------------------------------------------------------*/

    return (
        <div className="App">
            <h1>Todo List</h1>

            <input type="text"
            placeholder="Add an item..."
            value={newItem}
            onChange={e => setNewItem(e.target.value)}
            id="textInput"
            />

            <button className="add-button" onClick={() => addItem()}>Add</button>

            <ul>
                {items.map(item => {
                    return(
                        <li key={item.id}>
                            <input type="checkbox" id="checkBox"></input>
                            {item.value} 
                            <button className='delete-button' onClick={() => deleteItem(item.id)}>X</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default App