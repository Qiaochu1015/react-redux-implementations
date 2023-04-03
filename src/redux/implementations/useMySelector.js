import { store } from "../redux";
import { useState, useEffect } from "react";

export function useMySelector(callback) {
	const [state, setState] = useState(callback(store.getState()));

	useEffect(() => {
		store.subscribe(() => {
			setState(callback(store.getState()));
		});
	}, []);
	return state;
}
