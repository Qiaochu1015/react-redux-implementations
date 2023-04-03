export function myCreateStore(reducer, preloadedState) {
	const store = {};
	store.state = preloadedState;

	store.listeners = [];

	//getState
	store.getState = () => {
		return store.state;
	};

	//subscribe
	store.subscribe = (listener) => {
		store.listeners.push(listener);
	};

	//dispatch
	store.dispatch = (action) => {
		store.state = reducer(store.state, action);
		store.listeners.forEach((listener) => listener());
	};

	//Initial dispatch for the reducer to return the default state,
	//which is used to populate the state tree
	store.dispatch({ type: "ActionTypes.INIT" });

	return store;
}
