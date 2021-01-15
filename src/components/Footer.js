import React from "react";
import styled from "styled-components";

const FooterText = styled.p`
  background-color: darkblue;
  color: beige;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterText>
      {new Date().getFullYear()} Juan Pablo Oriana - All rights reserved.
    </FooterText>
  );
};

export default Footer;
