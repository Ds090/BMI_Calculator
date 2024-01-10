import { useState } from "react";

function BMIhooks() {
    const [Height, setHeight] = useState('');
    const [Weight, setWeight] = useState('');
    
    const [result, setResult] = useState(null);

    const calculateBMI = () => {
        const WeightInkg = parseFloat(Weight);
        const HeightIncm = parseFloat(Height) / 100;

        if (WeightInkg > 0 && HeightIncm > 0) {
            const bmivalue = WeightInkg / (HeightIncm * HeightIncm);
            setResult(bmivalue.toFixed(1));
        }else{
            alert('Please Enter Any Input!')
            setResult(null);
        }
    };
    return {setHeight, setWeight, result, calculateBMI}
}

export default BMIhooks;