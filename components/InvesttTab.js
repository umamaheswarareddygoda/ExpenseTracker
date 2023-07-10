import React, { Component } from 'react'
import './InvestStyle.css';
import Profit from './Profit';
import Form from './Form';
import Transactions from './Transactions';



export class InvesttTab extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             invested:0,
             returns:0,
             Trans:[],
             x:1
        }
        
        
    }
    // Trans=[];
    
    transview=()=>
    {
        var x1=this.state.x;
        x1+=1;
        x1=x1%2;
        this.setState({x:x1})
        console.log('kefb')
    }
    addVal=(vals)=>
    {
        console.log(vals)
        var x=parseInt(this.state.invested)-vals.value;
        var y=parseInt(this.state.returns)+vals.value;
        if(vals.value>=0)
        {
            this.setState(
                {returns:y}
            )
        }
        else 
        {
            this.setState(
                {invested:x}
            )
        }
        var val1={
            value:vals.value,
            comments:vals.comments
        }
        var arr=this.state.Trans;
        arr.push(vals);
        console.log(arr);
        this.setState({Trans:arr});
        console.log(this.state.Trans[0].comments)
        console.log(this.state.returns);
        console.log(this.state.invested);
        //this.render();
    }

    //const Lis=this.Trans.map((trans)=><p>{trans.value} for {trans.comments}</p>)

    deltrans=(ev)=>
    {
        console.log(ev)
    }
    
    render() {
        var arr=this.state.Trans;
        /*const nameList=arr.map((valu) => 
        
        <p >{valu.value} {valu.comments}</p>
        )*/

        var nameList=[];
        var i=arr.length-5;
        if(i<0)
        i=0;
        for(i;i<arr.length;i++)
        {
            if(arr[i].value>=0)
            nameList.push(<p id="profit1">{arr[i].value} &#8377; -> {arr[i].comments}</p>)
            else 
            nameList.push(<p id="loss1">{arr[i].value*-1} &#8377; -> {arr[i].comments}</p>)
        }
        var v1=[];
        for(i=0;i<arr.length;i++)
        {
            if(arr[i].value>=0)
            v1.push(<p key={i}  id="profit1">{arr[i].value} &#8377; -> {arr[i].comments}</p>)
            else 
            v1.push(<p key= {i}  id="loss1">{arr[i].value*-1} &#8377; -> {arr[i].comments}</p>)
        }
        
        if(this.state.x===1)
        return (
            
            <div className="transac">
                <div className="transac1">
                    <ul >
                    
                        <li id="return">RETURNS <p id="r1">{this.state.returns} &#8377;</p></li>
                        <li id="invest">INVESTED <p id="i1">{this.state.invested} &#8377;</p></li> 
                
                    </ul>
                    <Profit invested={this.state.invested} returns={this.state.returns}/>
                    
                    <p>ADD TRANSACTION</p>
                    <Form func={this.addVal}/>
                    
                    
                </div>
                <div id="xyz">
                    <h2 id="tr">LAST 5 TRANSACTIONS</h2>
                    
                    {nameList}
                </div>
                <button id="btn" onClick={this.transview}>VIEW ALL TRANSACTIONS</button>
        </div>)
        else 
        return (
            <div>
                {v1}
                <button  onClick={this.transview}>GO BACK</button>
            </div>
        )
    }
}

export default InvesttTab


