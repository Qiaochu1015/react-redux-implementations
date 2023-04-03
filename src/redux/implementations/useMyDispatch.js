import { store } from "../redux";

export function useMyDispatch() {
	return store.dispatch;
}
