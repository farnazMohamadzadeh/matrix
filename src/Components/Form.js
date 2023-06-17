import React, { useContext } from "react";
import matrixContext from "../Contexts/MatrixContext";

export const Form = () => {
  const matrixSize = useContext(matrixContext);
  return (
    <form>
      <div className="md:flex items-center mt-12">
        <div className="w-full md:w-1/2 flex flex-col">
          <label className="font-semibold leading-none">Number of Row</label>
          <input
            type="number"
            className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"
            value={matrixSize.matrix.rows}
            onChange={(e) =>
              matrixSize.setMatrix((prevValue) => ({
                ...prevValue,
                rows: parseInt(e.target.value),
              }))
            }
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
          <label className="font-semibold leading-none">Number of Column</label>
          <input
            type="number"
            className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"
            value={matrixSize.matrix.columns}
            onChange={(e) =>
              matrixSize.setMatrix((prevValue) => ({
                ...prevValue,
                columns: parseInt(e.target.value),
              }))
            }
          />
        </div>
      </div>
    </form>
  );
};
