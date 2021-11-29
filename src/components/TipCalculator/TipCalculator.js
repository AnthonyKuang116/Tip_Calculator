import React from 'react';
import { withTipCalculator} from '../hoc/withTipCalculator';

const TipCalculator = (props) => {
    const handleBillValue = (event) => {
        props.setBill(+event.target.value)
    }

    const handleTipSelect = (event) => {
        props.setTip(+event.target.value)
    }

    return (
        <div id="calculatorContainer">
            <h1 className="calculatorHeader">Tip Calculator</h1>
            <form id="calculatorForm">
                <p>How much was your bill?</p>
                <section>$ <input className="totalBeforeTip" id="totalBeforeTip" type="number" value={props.bill}  onChange={handleBillValue} placeholder="Bill Amount"></input></section>
                <p>How much would you like to tip?</p>
                <select id="tipPercent" onChange={handleTipSelect}>
                    <option value="" disable="true" >-- Choose A Tip --</option>
                    <option value="0.30">30% - Outstanding</option>
                    <option value="0.25">25% - Excellent</option>
                    <option value="0.20">20% - Good</option>
                    <option value="0.15">15% - Okay</option>
                    <option value="0.10">10% - Terrible</option>
                    <option value="0.05">5% - Bad</option>
                </select>
            </form>
            <button type="button" id="calculateBtn" onClick={props.handleCalculate}>Calculate</button>
            {props.setTipFromBill(props.bill * props.tip)}
            {props.viewTotal === false ? "" : <div className="viewTotal"><p>Your total is:</p>{'$'}{(props.total).toFixed(2)}</div>}
        </div>    
    )
}

const TipCalculatorContainer = withTipCalculator(TipCalculator)

export default TipCalculatorContainer;

