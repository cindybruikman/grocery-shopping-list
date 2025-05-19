import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearItems,
}) {
  const [sortBy, setSortBy] = useState("input");
  const [filterBy, setFilterBy] = useState("all"); // Nieuw: filterstatus

  // Sorteren
  let sortedItems = [...items];

  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  // Filteren
  const filteredItems =
    filterBy === "all"
      ? sortedItems
      : sortedItems.filter((item) => item.category === filterBy);

  return (
    <div className="list">
      <ul>
        {filteredItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </ul>
      <div className="actions">
        {/* Sorteeropties */}
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>

        {/* Filteropties */}
        <select value={filterBy} onChange={(e) => setFilterBy(e.target.value)}>
          <option value="all">All categories</option>
          <option value="Fruit">Fruit</option>
          <option value="Dairy">Dairy</option>
          <option value="Snacks">Snacks</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Beverages">Beverages</option>
          {/* Voeg hier andere categorieën toe als dat nodig is */}
        </select>

        <button onClick={onClearItems}>Clear list</button>
      </div>
    </div>
  );
}
