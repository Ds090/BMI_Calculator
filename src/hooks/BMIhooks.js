import { useState } from "react";

function BMIhooks() {
  const [Height, setHeight] = useState("");
  const [Weight, setWeight] = useState("");
  const [isLoading, setisLoading] = useState(false);

  const [result, setResult] = useState(null);

  const calculateBMI = () => {
    setisLoading(true);
    setTimeout(() => {
      const WeightInkg = parseFloat(Weight);
      const HeightIncm = parseFloat(Height) / 100;

      if (WeightInkg > 0 && HeightIncm > 0) {
        const bmivalue = WeightInkg / (HeightIncm * HeightIncm);
        setResult(bmivalue.toFixed(1));
      } else {
        alert("Please Enter Any Input!");
        setResult(null);
        setisLoading(false);
      }
      setisLoading(false);
    }, 2000);

    
  };
  
  return { setHeight, setWeight, result, calculateBMI, isLoading };
}

export default BMIhooks;
