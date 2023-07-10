import React, { Component } from 'react'


class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             value:'',
             comments:''
        }
        
    }
    
    valChange=(event)=>
    {
        if(event.target.value==='')
        this.setState({value:''});
        else if(event.target.value==='-')
        this.setState({value:'-'})
        else if(!isNaN(event.target.value))
        this.setState({value:parseInt(event.target.value)});
        
    }

    comChange=(event)=>
    {
        this.setState({comments:event.target.value})
    }

    submitHandler=(event)=>{
        if(!isNaN(this.state.value)){
        let x=parseInt(this.state.value);
        var obj={
            value:x,
            comments:this.state.comments
        }
        this.props.func(obj);
        this.setState({value:''});
        this.setState({comments:''});
        console.log(x);}
        event.preventDefault();
    }

    render() {
        return (
            <form>
                <input 
                type="text" 
                value={this.state.value} 
                onChange={this.valChange}
                placeholder="TRANSACTION AMOUNT(&#8377;)"
                />
                <br/>
                <br/>
                <input 
                type="text" 
                value={this.state.comments} 
                onChange={this.comChange} 
                placeholder="COMMENTS"
                />
                <br/><br/>
                <button  onClick={this.submitHandler}>ADD</button>
            </form>
        )
    }
}

export default Form
