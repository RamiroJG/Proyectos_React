import { useState } from "react";
import data from "./data"

import Title from "./component/Title";
import Menu from "./component/Menu";
import Categories from "./component/Categories";

// recorremos las categorias
const allCategories = ['all',...new Set(data.map((item)=>item.category))]

const App = () => {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories]  = useState(allCategories)
  const filterItems = (category) =>{
    if(category === 'all'){
      setMenuItems(data);
      return;
    }
    const newItems = data.filter((item)=> item.category === category)
    setMenuItems(newItems)
  }
  return(
    <main>
      <section className="menu">
        <Title text={"Our Menu"}/>
        <Categories categories={categories} filterItems={filterItems}  />
        <Menu  
          items={menuItems}
        />
      </section>
      
    </main>
  ) 
};
export default App;
