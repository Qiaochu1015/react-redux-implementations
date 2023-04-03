import React, { useMemo } from "react";
import { ReactReduxContext } from "react-redux";

export default function MyProvider({ store, children }) {
	const contextValue = useMemo(() => {
		return store;
	}, [store]);

	return <ReactReduxContext.Provider value={contextValue}>{children}</ReactReduxContext.Provider>;
}
