import React, { useEffect, useCallback, useReducer } from "react";

import ColorList from "./ColorList";
import ColorForm from "./ColorForm";

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

  const addColorHandler = colorObj => {
    dispatchHttp({ type: "SEND" });
    fetch(`https://react-hooks-repository.firebaseio.com/colors.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(colorObj)
    })
      .then(res => {
        dispatchHttp({ type: "RESPONSE" });
        return res.json();
      })
      .then(() => {
        dispatchColor({ type: "ADD", color: colorObj });
      });
  };

  const fetchColorList = useCallback(loadedColors => {
    dispatchColor({ type: "SET", colors: loadedColors });
  }, []);

  return (
    <>
      <ColorForm onAddColor={addColorHandler} />
      <ColorList colors={colorList} onLoadColorList={fetchColorList} />
    </>
  );
};

export default Colors;
