import React from "react";
import { v4 as uuidv4 } from "uuid";

const DataContext = React.createContext({
  data: [],
  addData: (data) => {},
});

export const DataContextProvider = (props) => {
  const data = [
    { id: uuidv4(), author: "hari", text: "capital of India ? " },
    { id: uuidv4(), author: "sree", text: "capital of America ? " },
  ];
  const addData = (userData) => {
    data.push(userData);
  };
  const contextValues = {
    data,
    addData,
  };
  return (
    <DataContext.Provider value={contextValues}>
      {props.children}
    </DataContext.Provider>
  );
};
export default DataContext;
