import React, { useEffect } from "react";
import styled from "styled-components";

const ColorList = ({ colors, onLoadColorList }) => {
  useEffect(() => {
    fetch(`https://react-hooks-repository.firebaseio.com/colors.json`, {
      method: "GET"
    })
      .then(res => {
        return res.json();
      })
      .then(res => {
        const loadedColors = [];
        for (const key in res) {
          loadedColors.push({
            id: key,
            colorName: res[key].colorName,
            colorNum: res[key].colorNum
          });
        }
        onLoadColorList(loadedColors);
      })
      .catch();
  }, [onLoadColorList]);

  return (
    <ListSection>
      <h2>Colors</h2>
      <ul>
        {colors.map(c => (
          <li key={c.colorName}>
            <ColorBox bgc={c.colorNum} />
            <p>{c.colorName}</p>
            <span>{c.colorNum}</span>
          </li>
        ))}
      </ul>
    </ListSection>
  );
};

const ListSection = styled.section`
  width: 80rem;
  max-width: 80%;
  margin: auto;
  h2 {
    border-bottom: 3px solid #ccc;
    padding-bottom: 1rem;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
  }
  li {
    margin: 1rem 0;
    padding: 0.5rem 1rem;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.26);
    border-radius: 0.4rem;
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    p {
      font-weight: 600;
    }
    span {
      margin-bottom: 1rem;
    }
  }
`;

const ColorBox = styled.div`
  width: 100%;
  height: 5rem;
  background: ${props => props.bgc};
  margin-bottom: 1rem;
`;

export default ColorList;
