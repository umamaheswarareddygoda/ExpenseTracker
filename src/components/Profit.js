import React from 'react'
import './ProfitStyle.css'

function Profit(props) {
    var profit=parseInt(props.invested)-parseInt(props.returns);
    console.log({profit})
    let item;
    if(profit>0)
    item=(
        <p id="loss">PENDING INVESTMENT<br/>{profit} &#8377;</p>
    )
    else 
    item=(
        <p id="profit">PROFIT<br/>{profit*-1} &#8377;</p>
    )
    return (
        <div>
            {item}
        </div>
    )
}

export default Profit
