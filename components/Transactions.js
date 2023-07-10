import React from 'react'
import './TransStyle.css'

function Transactions(props) {
    
    let nameList=[];
    for(var i=props.arr.length-6;i<props.arr.length;i++)
    {
        if(props.arr[i].value>=0)
        nameList.push(<p id="profit1">{props.arr[i].value} {props.arr[i].comments}</p>)
        else 
        nameList.push(<p id="loss1">{props.arr[i].value*-1} {props.arr[i].comments}</p>)
    }
    return (
        <div>
            {nameList}
        </div>
    )
}

export default Transactions
