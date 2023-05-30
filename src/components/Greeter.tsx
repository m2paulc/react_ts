import React from "react";

interface GreeterProps {
	person: string;
}

// function Greeter(props: GreeterProps) {
// 	return (
// 		<>
// 			<h1>Hello {props.person}!</h1>
// 			<p>Welcome to the world of React!</p>
// 		</>
// 	);
// }

//deconstruct props
function Greeter({ person }: GreeterProps) {
	return (
		<>
			<h1>Hello {person}!</h1>
			<p>Welcome to the world of React!</p>
		</>
	);
}

export default Greeter;
