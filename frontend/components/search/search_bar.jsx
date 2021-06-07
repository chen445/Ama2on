import React from 'react';
import { BsSearch } from 'react-icons/bs'

class SearchBar extends React.Component{
    constructor(props){
        super(props)
        this.state={input: " ", focus: false}
    }


    render(){
        let outline = "search-box " + this.props.className;
        if (this.state.focus){
            outline = outline + ' search-bar-outline'
        }
        return (
          <div className={outline}>
            <button className="allIcon">All ▾</button>
            <input
              className="search-bar"
              type="text"
              value={this.state.input}
              onFocus={(e) => this.setState({ focus: true })}
              onBlur={(e) => this.setState({ focus: false })}
              onChange={(e) => this.setState({input: e.currentTarget.value })}
            />
            <button type="submit" className="searchIcon">
              <BsSearch />
            </button>
          </div>
        );
    }
}

export default SearchBar;