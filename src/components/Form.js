import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Fruit"); // Nieuwe state voor categorie

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;

    // Voeg categorie toe aan nieuw item
    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
      category, // Categorie wordt toegevoegd
    };
    console.log(newItem);

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
    setCategory("Fruit"); // Reset categorie naar default
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your next meal? 🍎</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      ></input>

      {/* Categorie Dropdown */}
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Fruit">Fruit</option>
        <option value="Dairy">Dairy</option>
        <option value="Snacks">Snacks</option>
        <option value="Vegetables">Vegetables</option>
        <option value="Beverages">Beverages</option>
        <option value="Other">Other</option>
        {/* Voeg hier andere categorieën toe als dat nodig is */}
      </select>

      <button type="submit">Add</button>
    </form>
  );
}
