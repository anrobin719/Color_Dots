import React from "react";

import styled from "styled-components";

const Card = ({ children, ...rest }) => {
  return <CardBox {...rest}>{children}</CardBox>;
};

const CardBox = styled.div`
  padding: 4rem 2rem;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
`;

export default Card;
