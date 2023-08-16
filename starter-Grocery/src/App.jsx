import React, { useState } from "react";
import Form from "./components/Form";
import { nanoid } from "nanoid";
import Items from "./components/Items";
import { ToastContainer, toast } from "react-toastify";

const getLocalStorage = () =>{
  let list = localStorage.getItem('list')
  if(list){
    list = JSON.parse(localStorage.getItem('list'))
  }else{
    list = []
  }
  return list
}

const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items))
}

const App = () => {
  const [items, setItems] = useState(getLocalStorage())
  const addItem = (itemName) => {
    const newItem = {
      name: itemName,  
      complete: false,
      id: nanoid(),
    };
    const newItems = [...items, newItem]
    setItems(newItems)
    setLocalStorage(newItems)
    toast.success('item added to the list')
  }
  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId)
    setItems(newItems)
    setLocalStorage(newItems)
    toast.success('item deleted from the list')
  }
  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };
  return (
    <div>
      <h2>Grocery Bud - Starter</h2>
      <section className='section-center'>
        <ToastContainer position="top-center" />
        <Form addItem={addItem} />
        <Items items={items} removeItem={removeItem} editItem={editItem} />
      </section>
    </div>
  )
};

export default App;
