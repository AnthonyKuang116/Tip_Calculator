import React from 'react';
import { useTipCalculator } from '../hooks/useTipCalculator';


export const withTipCalculator = (WrappedComponent) => {
    return () => {
        const [bill, setBill, total, tip, setTip, viewTotal, setViewTotal, setTipFromBill, handleCalculate] = useTipCalculator(0);
     
        return(
            <WrappedComponent {...{bill, setBill, total, tip, setTip, viewTotal, setViewTotal, setTipFromBill, handleCalculate}}/>
        )
    }
}

export default withTipCalculator;