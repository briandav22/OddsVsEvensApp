import React from 'react';
import InputNumber from './InputNumber';
import DisplayResultHard from './DisplayResultHard';





export default class HardMode extends React.Component {

    state = {
		
		selectedOption: undefined
	}
    

    submitNumber = (choice)=>{
   
        this.setState(()=>({selectedOption:choice}))
       
        }
    

    render() {
        const padBottom = {
            paddingBottom: "20px",
        }
        

        const padLeft = {
            paddingLeft: "20px",
        }

        const padLeftSlightly = {
            paddingLeft: "30px",
        }
        const padLeftMore = {
            paddingLeft: "40px",
        }
        const padLeftEvenMore = {
            paddingLeft: "60px",
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
                <h1>Entering Hard Mode...enter a number with caution.</h1>
                
                <div style = {paddingAll}>
                <DisplayResultHard 
                    state = {this.state}/>
            
                <InputNumber 
                  submitNumber = {this.submitNumber}   />
            </div>
        <h4>Here is the Alogrythm we are using for Hard Mode:</h4>
        <code>
        <p >let userChoice = this.props.state.selectedOption;</p>    
        <p >switch(true){"{ "}</p>
        <p style={padLeft}>case (userChoice % 2) != 0 {"&&"} userChoice != null :</p>
        <p style={padLeft}>userChoice = 'Odd Number'</p>
        <p style={padLeftSlightly}>return ( </p>
        <p style={padLeftMore}>{"<div>"}</p>
        <p style= {padLeftEvenMore}> {"<p class> {userChoice}</p>"}</p>
        <p style={padLeftMore}>{"</div>"}</p>
        <p style={padLeft}>);</p>
        <p style={padLeft}>case (userChoice % 2) == 0 {"&&"} userChoice != null :</p>
        <p style={padLeft}>userChoice = 'Even Number'</p>
        <p style={padLeftSlightly}>return ( </p>
        <p style={padLeftMore}>{"<div>"}</p>
        <p style= {padLeftEvenMore}> {"<p class> {userChoice}</p>"}</p>
        <p style={padLeftMore}>{"</div>"}</p>
        <p style={padLeft}>);</p>
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
