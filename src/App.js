import React, { useState, useEffect } from 'react';
import './App.css';
import './reset.css';
import cross from './cross.svg';
import crossWhite from './crossWhite.svg';
import moon from './moon.svg';
import moonWhite from './moonWhite.svg';
function App() {
  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState([]);
  const [darkmode, setDarkMode] = useState(false);
  const [taskDate, setTaskDate] = useState('');

  const handleTaskDateChange = (event) => {
    setTaskDate(event.target.value);
  };

  const addItem = () => {
    if (!newItem) {
      alert('Enter the item');
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
      date: taskDate,
    };

    setItems((oldList) => [...oldList, item]);

    setNewItem('');

    setTaskDate('');
  };

  function deleteItem(id) {
    const newArray = items.filter((item) => item.id != id);
    setItems(newArray);
  }

  const handleSortTasks = () => {
    const sortedTasks = [...items].sort((a, b) => new Date(a.date) - new Date(b.date));
    setItems(sortedTasks);
  };

  function clearAllTodos() {
    setItems([]);
  }

  return (
    <div className="App">
      <div className={darkmode ? 'toDo dark' : 'toDo'}>
        <div className={darkmode ? 'container dark' : 'container'}>
          <div className="text_and_moon">
            <h1 className={darkmode ? 'general_text dark' : 'general_text'}>ToDo App</h1>
            <div onClick={() => setDarkMode(!darkmode)} className="moon">
              <img src={darkmode ? moonWhite : moon} alt="" />
            </div>
          </div>
          <div className={darkmode ? 'toDo_content dark' : 'toDo_content'}>
            <div className="toDoButtons">
              <p className={darkmode ? 'you_have dark' : 'you_have'}>
                You have{' '}
                <span>
                  {items.length} {items.length > 1 ? 'tasks' : 'task'}
                </span>{' '}
              </p>
              <button className={darkmode ? 'clearAll dark' : 'clearAll'} onClick={clearAllTodos}>
                Clear All Task
              </button>
              <button className={darkmode ? 'sortData dark' : 'sortData'} onClick={handleSortTasks}>
                Sort By Date
              </button>
            </div>

            <div className={darkmode ? 'toDo_input dark' : 'toDo_input'}>
              <input
                onChange={(e) => setNewItem(e.target.value)}
                type="text"
                value={newItem}
                placeholder="Type your task"
              />
              <input type="date" value={taskDate} onChange={handleTaskDateChange} />
              <button className="toDo_btn" onClick={() => addItem()}>
                Add Item
              </button>
            </div>
            <ul className="toDo_items">
              {items.map((item) => {
                return (
                  <li className={darkmode ? 'toDo_item dark' : 'toDo_item'} key={item.id}>
                    <p>{item.value}</p>
                    <p className="date">{item.date}</p>
                    <button className="toDo_item_btn" onClick={() => deleteItem(item.id)}>
                      <img src={darkmode ? crossWhite : cross} alt="cross" />
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
