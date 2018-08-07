import React from 'react';

export default class displayResult extends React.Component {
	constructor(props){
		super(props);
		

	}

	
			

		
        render() {

            const padBottomOdd = {
                paddingBottom: "20px",
                color: 'red'
            }
            
            const padBottomEven = {
                paddingBottom: "20px",
                color: 'green'
			}
		
			let userChoice = this.props.state.selectedOption;
            switch(true) {
                case (userChoice % 2) != 0 && userChoice != null :
                userChoice = 'Odd Number';
                  return  (
                    <div>
                        
                        <h1 style = {padBottomOdd}>{userChoice}</h1>
                    </div>
                );
                case (userChoice % 2) == 0 && userChoice != null:
                userChoice = 'Even Number';
                  return  (
                    <div>
                        
                        <h1 style = {padBottomEven}>{userChoice}</h1>
                    </div>
                );
            
                default:
                  return null;
              }

        }

};