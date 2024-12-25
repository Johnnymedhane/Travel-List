import { useState } from "react";
import  Item  from "./Item";

export  default function PackingList({ items, onDeleteItem, onToggle, onClearItems }) {
  const [sort, setSort] = useState("input");
  let sortItem;
  if (sort === "input") sortItem = items;

  if (sort === "description")
    sortItem = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sort === "packed")
    sortItem = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortItem.map((item) => (
          <Item item={item} onDeleteItem={onDeleteItem} onToggle={onToggle} key={item.id} />
        ))}
      </ul>
      <div className="actions">


        <select id="items" value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>

        <button onClick={onClearItems}>clear list</button>
      </div>
    </div>
  );
}
