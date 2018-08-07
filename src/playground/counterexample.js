class Counter extends React.Component {

	constructor(props){  //overide the constructor function and add function to it. 
		super(props);
		this.handleAddOn = this.handleAddOn.bind(this);
		this.handleMinusOne = this.handleMinusOne.bind(this);
		this.handleReset = this.handleReset.bind(this);
		this.state = {
			count: props.count
		};
   

	}
	handleAddOn(){
		this.setState((prevState)=>{
			return {
				count: prevState.count + 1
			}
		});
	}
	handleMinusOne(){
		this.setState((prevState)=>{
			return {
				count: prevState.count - 1
			}
		});
	}
	handleReset(){
		this.setState(()=>{
			return {
				count: 0
			}
		});
	}
	render() {
		return (
			<div>
				<h1>Count: {this.state.count} </h1>
				<button onClick = {this.handleAddOn}>+1</button>
				<button onClick= {this.handleMinusOne}>-1</button>
				<button onClick= {this.handleReset}>Reset</button>
			</div>

			)
	}

}


Counter.defaultProps = {
	count: 0
}

ReactDOM.render(<Counter />, document.getElementById('app'));



// let count = 0;

// const addOne = () => {
// 	count++;
// 	renderCountApp()
// };

// const minusOne = () => {
// 	count--;
// 	renderCountApp()
// };

// const reset = () => {
// 	count = 0
// 	renderCountApp()
// };

// const templateTwo = (
// 	<div>
// 		<h1>Count: {count}</h1>
// 		<button onClick={addOne}>+1</button>
// 		<button onClick={minusOne}>-1</button>
// 		<button onClick={reset}>reset</button>
// 	</div>
// );

// console.log(templateTwo);
// const appRoot = document.getElementById("app");

// ReactDOM.render(templateTwo, appRoot);

// const renderCountApp = () => {
// 	const templateTwo = (
// 		<div>
// 			<h1>Count: {count}</h1>
// 			<button onClick={addOne}>+1</button>
// 			<button onClick={minusOne}>-1</button>
// 			<button onClick={reset}>reset</button>
// 		</div>
// 	);
// 	ReactDOM.render(templateTwo, appRoot);
// };


// renderCounterApp();