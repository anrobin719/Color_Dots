import React from "react";

const ColorList = ({ colors }) => {
  return (
    <section>
      <h2>Colors</h2>
      <ul>
        {colors.map(c => (
          <li key={c.id}>
            <span>{c.title}</span>
            <span>{c.color}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ColorList;
