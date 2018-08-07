import React from 'react';
import InputNumber from './InputNumber';
import DisplayResult from './DisplayResult';





export default class EasyMode extends React.Component {

    state = {
		
		selectedOption: undefined
	}
    

    submitNumber = (choice)=>{
   
        this.setState(()=>({selectedOption:choice}))
       
        }

        

    render() {

        
        const padLeft = {
            paddingLeft: "20px",
        }

        const padLeftMore = {
            paddingLeft: "40px",
        }

        const paddingAll = {
            paddingLeft: "275px",
            paddingTop: "40px",
            paddingBottom: "40px",
        }

        
        return(
            <div>
                
                <div class="jumbotron">
                <div class="container" >
                
            <h1>Welcome to Easy Mode! Please Enter a Number</h1>
            
                
                
                    <div style = {paddingAll}>
                        <DisplayResult 
                            state = {this.state}/>
            
                        <InputNumber 
                            submitNumber = {this.submitNumber}   
                            />
                    </div>
                 

                    <p>Here is the Alogrythm we are using for Easy Mode:</p>
                    <code>
                        <p >let userChoice = this.props.state.selectedOption;</p>    
                        <p >if (userChoice){"{ "}</p>
                        <p style={padLeft}>if (userChoice % 2 !=0){"{ "}</p>
                        <p style={padLeftMore}>userChoice = 'Odd Number'</p>
                        <p style={padLeft}>{"} "} else {"{"}</p>
                        <p style={padLeftMore}>userChoice = 'Even Number'</p>
                        <p style={padLeft}>{"} "}</p>
                        <p>{"} "}</p>
                    </code>

        

               </div>
            </div>
            </div>
        )
    }

};



