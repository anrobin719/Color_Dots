import React, { useState } from "react";

import styled from "styled-components";
import Card from "./UI/Card";

const ColorForm = React.memo(props => {
  const [enteredColorName, setEnteredColorName] = useState("");
  const [enteredColorNum, setEnteredColorNum] = useState("");
  console.log("RENDERING COLOR FORM");

  const submitHandler = event => {
    event.preventDefault();
    props.onAddColor({
      colorName: enteredColorName,
      colorNum: enteredColorNum
    });
  };

  return (
    <ColorFormSection>
      <Card>
        <form onSubmit={submitHandler}>
          <div>
            <label>Color Name :</label>
            <input
              type="text"
              value={enteredColorName}
              placeholder="enter color name"
              onChange={e => setEnteredColorName(e.target.value)}
            />
          </div>
          <div>
            <label>Color Number :</label>
            <input
              type="text"
              value={enteredColorNum}
              placeholder="enter color number"
              onChange={e => setEnteredColorNum(e.target.value)}
            />
          </div>
          <SubmitBtnBox>
            <button type="submit">Add Ingredient</button>
          </SubmitBtnBox>
        </form>
      </Card>
    </ColorFormSection>
  );
});

const ColorFormSection = styled.section`
  width: 80rem;
  margin: 2rem auto;
  max-width: 80%;
  display: flex;
  flex-flow: column;
  input {
    font: inherit;
    padding: 0.1rem 0.25rem;
    border: none;
    border-bottom: 2px solid #ccc;
    margin-bottom: 1rem;
  }
`;

const SubmitBtnBox = styled.div`
  display: flex;
  justify-content: center;
  button {
    padding: 0.6rem 1rem 0.8rem;
    background: white;
    border-radius: 0.2rem;
  }
`;

export default ColorForm;
