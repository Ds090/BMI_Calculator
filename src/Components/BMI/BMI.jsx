import BMIhooks from "../../hooks/BMIhooks";
import Loader from "../loader/loader";

function BMICalculator() {
  const { setHeight, setWeight, result, calculateBMI, isLoading} = BMIhooks();

  return (
    <div className="flex flex-col items-center w-[300px] h-[450px]  py-2 px-2 gap-5 bg-white lg:w-[400px] lg:h-[500px] rounded-lg shadow-md shadow-green-950">
      <div className="flex justify-center items-center gap-1">
        <h1 className="text-center bg-gradient-to-br to-green-800 from-green-950 bg-clip-text text-transparent text-2xl font-bold font-serif">
        BMI Calculator 
      </h1>
      <img src="https://cdn-icons-png.flaticon.com/128/4349/4349072.png" alt="" className="w-[40px]"/>
      </div>
      <div className="w-[90%] h-[22%] rounded-lg flex flex-col items-center gap-2 shadow-sm shadow-black">
        <label className="text-xl font-bold font-serif">Height (feet)</label>
        <input
          type="number"
          onInput={(e) => setHeight(e.target.value)}
          className="w-[90%] outline-none text-center text-lg font-semibold"
        />
        <span className="p-[0.2px] w-[90%] bg-black"></span>
      </div>
      <div className="w-[90%] h-[22%] rounded-lg flex flex-col items-center gap-2 shadow-sm shadow-black">
        <label className="text-xl font-bold font-serif">Weight (kg)</label>
        <input
          type="number"
          onInput={(e) => setWeight(e.target.value)}
          className="w-[90%] outline-none text-center text-lg font-semibold"
        />
        <span className="p-[0.2px] w-[90%] bg-black"></span>
      </div>
      <button
        onClick={() => {
          calculateBMI();
        }}
        className="w-[90%] bg-gradient-to-br to-green-800 from-black py-2 text-white rounded-lg font-semibold font-serif hover:shadow-md hover:shadow-black hover:transition-shadow hover:ease-linear hover:duration-500 hover:delay-150"
      >
        Calculate BMI
      </button>
      {isLoading ? <Loader/> : result != null ? (
        <div className="flex flex-col items-center ">
          <h2 className="text-xl font-semibold font-serif">Your BMI is</h2>
          <div className="w-[90%] h-[50%] rounded-lg flex flex-col items-center gap-2 shadow-sm shadow-black text-2xl font-bold bg-gradient-to-br to-green-800 from-green-950 bg-clip-text text-transparent">{result}</div>
        </div>
      ) : (
        ""
      )}
      <div>{isLoading ? "" : result === null ? "" : result < 18.5 ? <p className="bg-gradient-to-br to-[#ffc44d] from-black text-transparent bg-clip-text text-xl font-semibold font-serif">You are underweigth</p> : result >= 18.5 && result <= 24.9 ? <p className="bg-gradient-to-br to-[#4AC38D] from-black bg-clip-text text-transparent text-xl font-semibold font-serif">You are Normal Weigth</p> : result >= 25 && result <= 29.9 ? <p className="bg-gradient-to-br to-[#ff884d] from-black text-transparent bg-clip-text text-xl font-semibold font-serif">You are Over Weigth</p> : <p className="bg-gradient-to-br to-[#ff5e57] from-black text-transparent bg-clip-text text-xl font-semibold font-serif drop-shadow-md">You are in the obese range</p>}</div>
    </div>
  );
}
export default BMICalculator;
