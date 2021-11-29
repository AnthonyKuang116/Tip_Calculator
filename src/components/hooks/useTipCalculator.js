import React from 'react';
import { useState } from "react";

export const useTipCalculator = (initalBill) => {
    const [bill, setBill] = React.useState(initalBill);
    const [tip, setTip] = useState(0);
    const [tipFromBill, setTipFromBill] = useState(0)
    const [total, setTotal] = useState(0);
    const [viewTotal, setViewTotal] = useState(false);

    const handleCalculate = () => {
        setTotal(bill + tipFromBill);
        setViewTotal(true)
    }
    return [bill, setBill, total, tip, setTip, viewTotal, setViewTotal, setTipFromBill, handleCalculate]
}