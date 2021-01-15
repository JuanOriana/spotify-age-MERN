import styled from "styled-components";

const mainColor = "#2d46b9";
const secondaryColor = "#1ed760";

export const HomeBg = styled.div`
  background-color: ${mainColor};
  color: ${secondaryColor};
  text-align: center;
  position: relative;
  height: 100vh;
`;
export const HomeWrapper = styled.div`
  padding-top: 35vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HomeH1 = styled.h1`
  font-weight: 700;
  font-size: 64px;
`;

export const HomeText = styled.p`
  font-size: 32px;
  margin-top: 6px;
  font-weight: 300;
`;

export const Input = styled.input`
  background-color: white;
  font-size: 16px;
  color: ${mainColor};
  padding: 0.5em 1em;
  margin-top: 16px;
  width: 18em;
  border: none;
  border-radius: 3px;
`;

export const Button = styled.button`
  background-color: ${mainColor};
  color: ${secondaryColor};
  margin-left: 24px;
  margin-top: 24px;
  font-size: 24px;
  padding: 5px;
  width: 220px;
  height: 2em;
  border: 2px solid ${secondaryColor};
  border-radius: 12px;

  &:hover {
    border: none;
    background: ${secondaryColor};
    color: ${mainColor};
    transition: all 0.2s ease-in-out;
  }
`;
