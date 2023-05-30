import React from "react";
import Greeter from "./components/Greeter";
import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Greeter person="Bleu" />
			</header>
		</div>
	);
}

export default App;
