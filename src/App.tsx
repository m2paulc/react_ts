import React, { useState } from "react";
import Greeter from "./components/Greeter";
import "./App.css";
import ShoppingList from "./components/ShoppingList";
import Item from "./models/item";
import ShoppingListForm from "./ShoppingListForm";

function App() {
	const [items, setItems] = useState<Item[]>([]);

	//add items to the useState
	const addItem = (product: string) => {
		setItems([...items, { id: 3, product, quantity: 2 }]);
	};
	// const items = [
	// 	{
	// 		id: 1,
	// 		product: "Lemon",
	// 		quantity: 3,
	// 	},
	// 	{
	// 		id: 2,
	// 		product: "Tangerine",
	// 		quantity: 5,
	// 	},
	// ];
	return (
		<div className="App">
			<header className="App-header">
				<Greeter person="Bleu" />
				<ShoppingListForm onAddItem={addItem} />
				<ShoppingList items={items} />
			</header>
		</div>
	);
}

export default App;
