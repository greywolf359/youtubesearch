import React, {Component} from 'react';

//this is called a functional component
//it is not a class component because it does
//not need to be aware of state, that is,
//it doesnt need to do any recordkeeping 
/*
const SearchBar = ()=>{
	return <input/>
}
*/

/*now we will refactor it to a class component*/

class SearchBar extends Component{
	//the constructor method is the only method called
	//automatically when a new instance is created
	constructor(props){
		super(props);
		this.state = {term: ''}
	}

	onInputChange(term){
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
	render(){
		return(
			<div className = "search-bar">
			<input 
			value = {this.state.term}
			onChange = {(event)=>this.onInputChange(event.target.value)}/>
			Value of input: {this.state.term}
			</div>
		)
	}

	
}
export default SearchBar;
