import React, { useState } from 'react';
import './App.css';
import './reset.css';
import cross from './cross.svg';

function App() {
  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (!newItem) {
      alert('Enter the item');
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };

    setItems((oldList) => [...oldList, item]);

    setNewItem('');
  };

  function deleteItem(id) {
    const newArray = items.filter((item) => item.id != id);
    setItems(newArray);
  }

  return (
    <div className="App">
      <div className="toDo">
        <div className="container">
          <div className="toDo_content">
            <div className="toDo_input">
              <input
                onChange={(e) => setNewItem(e.target.value)}
                type="text"
                value={newItem}
                placeholder="Type your task"
              />
              <button className="toDo_btn" onClick={() => addItem()}>
                Add Item
              </button>
            </div>
            <ul className="toDo_items">
              {items.map((item, index) => {
                return (
                  <li className="toDo_item" key={item.id}>
                    {item.value}{' '}
                    <button className="toDo_item_btn" onClick={() => deleteItem(item.id)}>
                      <img src={cross} alt="cross" />
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
