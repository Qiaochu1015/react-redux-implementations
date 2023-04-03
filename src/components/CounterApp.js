import React from "react";
import { store } from "../redux/redux";
import { useDispatch, useSelector } from "react-redux";
import { useMySelector } from "../redux/implementations/useMySelector";
import { useMyDispatch } from "../redux/implementations/useMyDispatch";

function CounterApp() {
	const counter = useMySelector((state) => state.functionalCounter);
	const dispatch = useMyDispatch();

	const handleIncrement = () => {
		dispatch({ type: "functionalCounter/increment" });
	};

	const handleDecrement = () => {
		dispatch({ type: "functionalCounter/decrement" });
	};
	return (
		<div>
			<h1>Counter(Functional Component)</h1>
			<div className="num">{counter}</div>

			<button onClick={handleIncrement}>Increment</button>
			<button onClick={handleDecrement}>Decrement</button>
		</div>
	);
}

export default CounterApp;
