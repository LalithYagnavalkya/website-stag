import React from "react";
import styled from "styled-components";

const Sebi = () => {
  return <Sebistyles>We are not SEBI registered yet*</Sebistyles>;
};

export default Sebi;
const Sebistyles = styled.div`
  position: fixed;
  bottom: 2rem;
  left: 2rem;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  justify-content: center;
  /* background-color: #e42d2d; */
  color: #e42d2d;
  padding: 4px 12px;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
