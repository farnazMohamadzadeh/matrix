import React, { useState } from "react";
import matrixContext from "../Contexts/MatrixContext";
import { Form } from "./Form";
import { Matrix } from "./Matrix";

export const Main = () => {
  const [matrix, setMatrix] = useState({
    rows: 0,
    columns: 0,
  });
  const [matrixValues, setMatrixValues] = useState([]);
  const [sum, setSum] = useState(null);
  const [btnVisibility, setBtnVisibility] = useState(false);

  const handleSum = () => {
    const result = matrixValues.reduce((prev, current) => prev + current, 0);
    setSum(result);
  };

  return (
    <matrixContext.Provider
      value={{
        matrix,
        setMatrix,
        matrixValues,
        setMatrixValues,
        setBtnVisibility,
      }}
    >
      <div className="w-full ">
        <div className="max-w-5xl mx-auto h-52 px-6 sm:px-6 lg:px-8 mb-12">
          <div
            className="bg-white w-full shadow rounded p-8
          "
          >
            <p className="text-3xl font-bold leading-7 text-center">
              Create Matrix
            </p>
            <Form />
          </div>
          <Matrix />

          {/* sum button is visible when matrix created */}
          {btnVisibility && (
            <div className="flex  items-center justify-center w-full">
              <button
                onClick={handleSum}
                className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded"
              >
                sum
              </button>
              <p className="mt-9 font-semibold leading-none py-4 px-10">
                SUM = {sum}
              </p>
            </div>
          )}
        </div>
      </div>
    </matrixContext.Provider>
  );
};
