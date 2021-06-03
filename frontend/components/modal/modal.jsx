import React from 'react';

class Modal extends React.Component{
    constructor(props){
        super(props)
        this.state = { showMoal: false}
    }

    showMoal=()=>{
        this.setState({showModal:true})
    }

    closeModal=()=>{
        this.setState({showModal: false})
    }
    render(){
        return <div>Modal Content</div>
    }


}


