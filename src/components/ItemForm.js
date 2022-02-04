import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [itemForm, setItemForm] = useState({
    id: 1,
    name: "",
    category: "Produce",
  });

  function handleItemForm(event) {
    const key = event.target.name;
    const value = event.target.value;

    setItemForm({
      ...itemForm,
      [key]: value,
    });
  }

  function submitForm(e) {
    e.preventDefault();
    const newItem = {
      id: uuid(),
      name: itemForm.name,
      category: itemForm.category,
    };
    console.log(newItem);
    onItemFormSubmit(newItem);
  }

  return (
    <form onSubmit={submitForm} className="NewItem">
      <label>
        Name:
        <input
          onChange={handleItemForm}
          value={itemForm.name}
          type="text"
          name="name"
        />
      </label>

      <label>
        Category:
        <select
          value={itemForm.category}
          onChange={handleItemForm}
          name="category"
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
