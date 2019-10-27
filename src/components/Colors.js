import React, { useEffect, useCallback, useReducer } from "react";

import ColorList from "./ColorList";

const colorReducer = (curColors, action) => {
  switch (action.type) {
    case "SET":
      return action.colors;
    case "ADD":
      return [...curColors, action.color];
    case "DELETE":
      return curColors.filter(c => c.id !== action.id);
    default:
      throw new Error("Should not get there!");
  }
};

const httpReducer = (curHttpState, action) => {
  switch (action.type) {
    case "SEND":
      return { loading: true, error: null };
    case "RESPONSE":
      return { ...curHttpState, loading: false };
    case "ERROR":
      return { loading: false, error: action.errorMessage };
    case "CLEAR":
      return { ...curHttpState, error: null };
    default:
      throw new Error("Should not be reached!");
  }
};

const Colors = props => {
  const [colorList, dispatchColor] = useReducer(colorReducer, []);
  const [httpState, dispatchHttp] = useReducer(httpReducer, {
    loading: false,
    error: null
  });

  useEffect(() => {
    console.log("rendering colors", colorList);
  }, [colorList]);

  const fetchColorList = () => {
    dispatchHttp({ type: "SEND" });
    fetch("", {
      method: "GET"
    })
      .then(res => {
        dispatchHttp({ type: "RESPONSE" });
        return res.json();
      })
      .then(res => {
        dispatchColor({ type: "ADD" });
      })
      .catch();
  };

  return (
    <>
      <ColorList colors={colorList} />
    </>
  );
};

export default Colors;
