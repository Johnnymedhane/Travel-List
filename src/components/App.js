import { useState } from "react";
import Logo from "./Logo"
import Form from  "./Form"
import PackingList  from "./PackingList";
import  State  from "./State";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "stock", quantity: 12, packed: false},
  { id: 3, description: "charger", quantity: 1, packed: true },
];



export default function App() {
  const [items, setItems]  = useState([])
  
  function handleItems(item) {
    setItems(items => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter(item => item.id !== id));
  }

function handleToggleItem(id){
setItems((items) => items.
map(item => item.id === id ? {...item, packed: !item.packed} :
  item
)
);
}

function handleClearList(){
  const confirm = window.confirm('are you sure you want to delete all items?');
if(confirm) setItems([]);
}

return<div className="app">
<Logo/>
<Form onAddItems= {handleItems} />
<PackingList items= {items} onDeleteItem={handleDeleteItem} onToggle={handleToggleItem} onClearItems={handleClearList} />
<State items={items}/>
</div>
}



