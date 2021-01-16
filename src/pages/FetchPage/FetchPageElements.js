import styled from "styled-components";

const mainColor = "#191414";
const secondaryColor = "#00D95A";

export const FetchBg = styled.div`
  background: linear-gradient(#777, ${mainColor} 30%);
  color: white;
  text-align: center;
  position: relative;
  padding-bottom: 5vh;
  height: ${({ isLoading }) => (isLoading ? "98vh" : "auto")};
`;

export const FetchWrapper = styled.div`
  padding-top: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoadWrapper = styled.div`
  padding-top: 35vh;
`;

export const FetchH1 = styled.h1`
  font-weight: 700;
  font-size: 48px;
  text-shadow: 2px 2px 2px ${mainColor};

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

export const FetchText = styled.p`
  font-size: 32px;
  font-weight: 500;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const FetchSubText = styled.p`
  font-size: 20px;
  font-weight: 300;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const ProgressBox = styled.div`
  border: 1.5px solid ${secondaryColor};
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  margin-top: 5vh;
  width: 75%;
  padding: 35px 50px;
  background: linear-gradient(90deg, #030606, #222 30%);
  box-shadow: 7px 10px 10px #000;
  border-radius: 35px;
  @media screen and (max-width: 768px) {
    padding: 10px;
  }
`;
export const ProgressBarWrapper = styled.div`
  display: flex;
  margin-top: 10px;
  height: 5em;
  width: 100%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ProgressBar = styled.div`
  position: relative;
  height: 3em;
  width: 80%;
  border: 1px solid ${secondaryColor};
  background-color: #111;
  border-radius: 1.5em;

  &::before {
    text-shadow: 2px 2px 2px #333;
    content: "${({ progress }) => progress}";
    color: ${({ progress }) => (progress !== "0.00%" ? "#fff" : "#888")};
    display: flex;
    align-items: center;
    position: absolute;
    left: 0.5em;
    top: 0.5em;
    bottom: 0.5em;
    width: ${({ progress }) => progress};
    max-width: calc(100% - 3em);
    background: ${({ progress }) =>
      progress !== "0.00%"
        ? "linear-gradient(90deg, #2d46b9 ,#1ed760)"
        : "#000"};
    border-radius: 1.5em;
    padding: 0.5em;
  }
`;

export const ProgressLabel = styled.div`
  font-size: 18px;
  color: #2cbb67;
  width: 15%;
  font-weight: 500;
  margin-left: 10px;
  margin-top: 0.9em;
  margin-right: 0px;
  text-align: left;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 0px;
    margin-bottom: 3px;
    margin-left: 0;
    text-align: center;
  }
`;
