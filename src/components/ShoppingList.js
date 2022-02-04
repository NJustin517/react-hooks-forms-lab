import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [itemsList, setItemsList] = useState([...items]);

  const [selectedFilter, setSelectedFilter] = useState({
    category: "All",
    search: "",
  });

  // const [itemForm, setItemForm] = useState({
  //   id: 1,
  //   name: "",
  //   category: "Produce",
  // });

  function handleCategoryChange(event) {
    setSelectedFilter({
      ...selectedFilter,
      category: event.target.value,
    });
  }

  function handleSearchChange(event) {
    setSelectedFilter({
      ...selectedFilter,
      search: event.target.value,
    });
  }

  // function handleItemForm(event) {
  //   const key = event.target.name;
  //   const value = event.target.value;

  //   setItemForm({
  //     ...itemForm,
  //     [key]: value,
  //   });
  // }

  function handleSubmit(newItem) {
    const newArray = [...itemsList, newItem];
    setItemsList(newArray);
  }

  const itemsToDisplay = itemsList
    .filter((item) => {
      if (selectedFilter.category === "All") return true;

      return item.category === selectedFilter.category;
    })
    .filter((item) => {
      return item.name.includes(selectedFilter.search);
    });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleSubmit} />
      <Filter
        search={selectedFilter.search}
        onSearchChange={handleSearchChange}
        onCategoryChange={handleCategoryChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
