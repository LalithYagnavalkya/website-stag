import React from "react";
import styled from "styled-components";

const Social = () => {
  return (
    <Wrapper>
      <div className="social-icons">
        <a target="_blank" href="https://www.instagram.com/stag_investments/">
          <img src="/insta.svg" alt="" />
        </a>
        <a target="_blank" href="https://discord.com/invite/8HZFFXSRWp">
          <img src="/discord.svg" alt="" />
        </a>
        <a
          target="_blank"
          href="https://www.facebook.com/people/The-Krypto-Knight/100069484327008/"
        >
          <img src="/facebook.svg" alt="" />
        </a>
      </div>
    </Wrapper>
  );
};

export default Social;

const Wrapper = styled.div`
  .social-icons {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    justify-content: center;
  }
`;
