import React from 'react'
import {Link} from 'react-router-dom';
class SessionForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            first_name: this.props.first_name,
            last_name: this.props.last_name,
            email: this.props.email,
            password: this.props.password
        }
        this.handleClick= this.handleClick.bind(this)
    }

    handleClick(e){
        e.preventDefault();
        this.props.action(this.state)
    }

    update(field){
        return e=>this.setState({[field]: e.currentTarget.value})
    }

    errors() {
        return(
            <ul>
                {this.props.errors.map((error,i)=>(
                    <li key={i}>{error}</li>
                ))}
            </ul>
        )
    }

    render(){

        const fisrt_name_input = (this.props.first_name === undefined) ? "" :
        <label>FirstName:
            <input type="text"
            value={this.state.first_name}
            onChange={this.update('first_name')}/>
        </label>

        const last_name_input = (this.props.last_name === undefined) ? "" :
        <label>LastName:
            <input type="text"
            value={this.state.last_name}
            onChange={this.update('last_name')}/>
        </label>
        
        const link = 
        <div>
            {this.props.displayLink.name} &nbsp;
            <Link to={this.props.displayLink.link}>{this.props.displayLink.to}</Link>
        </div>
       
        
        
        return(
            <form onSubmit={this.handleClick}>
                <h1>{this.props.formType}</h1>
                <br/>
                {this.errors()}
                <label>Email:
                    <input name="email" 
                    value={this.state.email}
                    onChange={this.update('email')}/>
                </label>
                 <label>Password:
                    <input name="password" 
                    value={this.state.password}
                    onChange={this.update('password')}/>
                </label>
                {fisrt_name_input}
                {last_name_input}
                <input type="submit" value={this.props.formType}/>
                {link}
            </form>
        )
    }
}

export default SessionForm 