import React from 'react';

export default class InputNumber extends React.Component {



    state = {
		error:undefined
	}
	constructor(props){
		super(props);
		this.submitNumber = this.submitNumber.bind(this);

	}
	submitNumber= (e)=> {
		e.preventDefault();

		const option = e.target.elements.option.value.trim();
		const error = this.props.submitNumber(option);

        this.setState(()=>({error}));
        

		if (!error){
			e.target.elements.option.value = '';
		}
		}

        render() {
            return (
                <div>
                {/* {this.state.error && <p className="add-option-error">{this.state.error}</p>} */}
                    <form  className = "form-inline" onSubmit={this.submitNumber}>
                        
                        {/* <input className="add-option__input" type="text" name="option" /> */}
						<input className="form-control" name="option" type="number" />
                        <button className="btn btn-primary ">Submit your Number</button>
                    </form>
    
                </div>
            );
        }

};

