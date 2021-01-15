import styled from "styled-components";

const mainColor = "#2d46b9";
const secondaryColor = "#1ed760";

export const FetchBg = styled.div`
  background-color: ${mainColor};
  color: ${secondaryColor};
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
`;

export const FetchText = styled.p`
  font-size: 32px;
  font-weight: 500;
`;

export const FetchSubText = styled.p`
  font-size: 20px;
  font-weight: 300;
`;

export const ProgressBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  margin-top: 5vh;
  width: 75%;
  padding: 35px 50px;
  background: linear-gradient(90deg, #333646 70%, #777787);
  border-radius: 4.5%;
`;
export const ProgressBarWrapper = styled.div`
  display: flex;
  margin-top: 10px;
  height: 5em;
  width: 100%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ProgressBar = styled.div`
  position: relative;
  height: 3em;
  width: 80%;
  background-color: #111;
  border-radius: 1.5em;

  &::before {
    content: "${({ progress }) => progress}";
    color: white;
    display: flex;
    align-items: center;
    position: absolute;
    left: 0.5em;
    top: 0.5em;
    bottom: 0.5em;
    width: ${({ progress }) => progress};
    min-width: 0;
    max-width: calc(100% - 3em);
    background: linear-gradient(90deg, ${mainColor}, ${secondaryColor});
    border-radius: 1.5em;
    padding: 0.5em;
  }
`;

export const ProgressLabel = styled.div`
  font-size: 18px;
  color: white;
  width: 15%;
  margin-left: 10px;
  margin-top: 0.9em;
  margin-right: 0px;
  text-align: left;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 0px;
    margin-bottom: 3px;
  }
`;
