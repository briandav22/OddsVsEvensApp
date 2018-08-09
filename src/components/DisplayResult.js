import React from 'react';

export default class displayResult extends React.Component {
	constructor(props){
		super(props);
		
	
	}

	
			

		
        render() {
			let padBottom = {
				paddingBottom: "20px",
				color: 'green'
			}
			
			let userChoice = ['']
			

			const evalMe = (user_input) => {
				
				user_input = user_input.toString();
				const r={
					0:'EVEN',
					1:'ODD',
					2:'EVEN',
					3:'ODD',
					4:'EVEN',
					5:'ODD',
					6:'EVEN',
					7:'ODD',
					8:'EVEN',
					9:'ODD',
				};
			
				let result = user_input.slice(-1);
			
				return( r[result]);
			};
			if (this.props.state.selectedOption != null){

				console.log(typeof(this.props.state.selectedOption))

				let tryMe = parseInt(this.props.state.selectedOption)

				console.log(typeof(tryMe))
			
			userChoice.push(evalMe(this.props.state.selectedOption));}



			if (userChoice ){
				if (userChoice[1] ==='ODD'){
					
					padBottom.color = 'red'
				}else {
					
					padBottom.color = 'green'
				}
			}
            return (
                <div>
					
					<h1 style={padBottom}>{userChoice}</h1>
                </div>
            );
        }

};
