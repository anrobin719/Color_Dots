import React, { useContext } from "react";

import styled from "styled-components";
import { AuthContext } from "../context/auth-context";
import Card from "./UI/Card";

const Auth = () => {
  const authContext = useContext(AuthContext);
  const loginHandler = () => {
    authContext.login();
  };

  return (
    <AuthCardBox>
      <AuthCard>
        <h2>You are not authenticated!</h2>
        <p>Please log in to continue.</p>
        <button onClick={loginHandler}>Log In</button>
      </AuthCard>
    </AuthCardBox>
  );
};
const AuthCardBox = styled.div`
  width: 30rem;
  margin: 2rem auto;
  max-width: 80%;
  text-align: center;
`;
const AuthCard = styled(Card)`
  h2,
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 0.6rem 1rem 0.8rem;
    background: white;
    border-radius: 0.2rem;
  }
`;

export default Auth;
