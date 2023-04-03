import "./App.css";
import ClassCounterApp from "./components/ClassCounterApp";
import CounterApp from "./components/CounterApp";
import { store } from "./redux/redux";
import { Provider } from "react-redux";
import MyProvider from "./redux/implementations/MyProvider";

function App() {
	return (
		<MyProvider store={store}>
			<div className="App">
				<CounterApp />
				<ClassCounterApp />
			</div>
		</MyProvider>
	);
}

export default App;
