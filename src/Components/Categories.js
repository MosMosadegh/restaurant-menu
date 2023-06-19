import React, { useState } from "react";

const Categories = ({categoryItem, filteredFoods}) => {

  const [mainCategory, setMainCategory] = useState('all')
  
  return (
    <div className="btn-container">
      {categoryItem.map( item => ( 
      <button
      key={item}
      type="button"
      className={item === mainCategory ? "filter-btn highlight" : "filter-btn" }
        onClick={() => {
          setMainCategory(item)
          filteredFoods(item)
        }}
      >
        {item}
      </button>
      ))}
    </div>
  );
};

export default Categories;
