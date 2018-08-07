import React from 'react';

export default class displayResult extends React.Component {
	constructor(props){
		super(props);
		
	
	}

	
			

		
        render() {
			let padBottom = {
				paddingBottom: "20px",
				color: 'red'
			}
		
			let userChoice = this.props.state.selectedOption;
			if (userChoice){
				if (userChoice % 2 != 0){
					userChoice = 'Odd Number';
					padBottom.color = 'red'
				}else {
					userChoice = 'Even Number';
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
