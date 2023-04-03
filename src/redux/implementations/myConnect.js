import { Component } from "react";
import { store } from "../redux";

//function that returns an HOC
export function myConnect(mapStateToProps, mapDispatchToProps) {
	return function withConnect(WrappedComponent) {
		class Connect extends Component {
			componentDidMount() {
				store.subscribe(this.handleChange);
			}

			componentWillUnmount() {
				store.subscribe(this.handleChange);
			}

			handleChange = () => {
				this.forceUpdate();
			}

			render() {
				const props = this.props;
				const stateProps = mapStateToProps(store.getState());
				const dispatchProps = mapDispatchToProps(store.dispatch);
				return (
					<WrappedComponent
						{...props}
						{...stateProps}
						{...dispatchProps}
					/>
				);
			}
		}
		return Connect;
	};
}
