import React, { useState } from "react";
import "./App.css";
import menu from "./data";
import Menu from "./Components/Menu";
import Categories from "./Components/Categories";

const foodCategories = [
  "all",...new Set(menu.map((menu) => menu.category)),
];
function RestApp() {

  const [allMenus, setAllMenus] = useState(menu);
  const [categories, setCategories] = useState(foodCategories);

  const filteredFoods = (category) => {
    if (category === 'all') {
      setAllMenus(menu)
      return
    }
    let filteredMenus = menu.filter(menu => menu.category === category)
    setAllMenus(filteredMenus)
  }
 
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categoryItem={categories} filteredFoods={filteredFoods}/>
        <Menu menus={allMenus} />
      </section>
    </main>
  );
}

export default RestApp;
