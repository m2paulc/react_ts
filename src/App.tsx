import React, { useState } from "react";
import Greeter from "./components/Greeter";
import "./App.css";
import ShoppingList from "./components/ShoppingList";
import Item from "./models/item";
import ShoppingListForm from "./ShoppingListForm";
import { v4 as getId } from "uuid";

function App() {
	const [items, setItems] = useState<Item[]>([]);

	//add items to the useState
	const addItem = (product: string, quantity: number) => {
		setItems([...items, { id: getId(), product, quantity }]);
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
