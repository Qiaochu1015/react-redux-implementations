import React, { Component } from "react";
import { connect } from "react-redux";
import { myConnect } from "../redux/implementations/myConnect";

export class ClassCounterApp extends Component {
	render() {
		const { classCounter, increment, decrement } = this.props;
		return (
			<div>
				<h1>Counter(Class Component)</h1>
				<div className="num">{classCounter}</div>
				<button onClick={increment}>Increment</button>
				<button onClick={decrement}>Decrement</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	classCounter: state.classCounter,
});

const mapDispatchToProps = (dispatch) => {
	return {
		increment: () => dispatch({ type: "classCounter/increment" }),
		decrement: () => dispatch({ type: "classCounter/decrement" }),
	};
};

export default myConnect(mapStateToProps, mapDispatchToProps)(ClassCounterApp);
