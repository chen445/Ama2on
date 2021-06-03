import React from 'react';
import { BsSearch } from 'react-icons/bs'

class SearchBar extends React.Component{
    constructor(props){
        super(props)
        this.state={input: " "}
    }

    update(field){
        return e=> this.setState({[field]: e.currentTarget.value})
    }

    render(){
        return(
            <div className={this.props.className}>
                <input className="search-bar" type="text"
                value={this.state.input}
                onChange={this.update('input')}/>
                <a><BsSearch/></a>
            </div>
        )
    }
}

export default SearchBar;