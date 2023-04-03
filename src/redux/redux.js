import { createStore } from "redux";
import { myCreateStore } from "./implementations/myCreateStore";

const counterReducer = (
	state = { classCounter: 0, functionalCounter: 0 },
	action
) => {
	switch (action.type) {
		case "classCounter/increment":
			return { ...state, classCounter: state.classCounter + 1 };

		case "classCounter/decrement":
			return { ...state, classCounter: state.classCounter - 1 };

		case "functionalCounter/increment":
			return { ...state, functionalCounter: state.functionalCounter + 1 };

		case "functionalCounter/decrement":
			return { ...state, functionalCounter: state.functionalCounter - 1 };

		default:
			return state;
	}
};

export let store = myCreateStore(counterReducer);

store.subscribe(() => console.log(store.getState()));
