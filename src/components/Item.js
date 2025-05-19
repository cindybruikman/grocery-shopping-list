export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed} // Gebruik 'checked' in plaats van 'value' voor checkbox
        onChange={() => {
          onToggleItem(item.id);
        }}
      ></input>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      {/* Categorie tonen */}
      <span style={{ fontSize: "1.2rem", color: "#555", marginLeft: "1rem" }}>
        ({item.category})
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
