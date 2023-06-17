import React, { useContext } from "react";
import matrixContext from "../Contexts/MatrixContext";

export const Matrix = () => {
  const matrixTable = useContext(matrixContext);

  const createMatrix = () => {
    let table = [];
    for (let i = 0; i < matrixTable.matrix.rows; i++) {
      let children = [];
      for (let j = 0; j < matrixTable.matrix.columns; j++) {
        children.push(
          <td key={j + 1}>
            <input
              type="number"
              className=" text-gray-900 p-3 focus:outline-none mt-4 bg-gray-100 border rounded border-gray-200"
              onChange={(e) => {
                matrixTable.setMatrixValues((prev) => [
                  ...prev,
                  parseInt(e.target.value),
                ]);
                matrixTable.setBtnVisibility(true);
              }}
            />
          </td>
        );
      }
      table.push(<tr key={i}>{children}</tr>);
    }
    return table;
  };
  return (
    <table>
      <tbody>{createMatrix()}</tbody>
    </table>
  );
};
