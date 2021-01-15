import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  HomeBg,
  HomeWrapper,
  HomeH1,
  HomeText,
  Input,
  Button,
} from "./HomePageElements";

const HomePage = () => {
  return (
    <HomeBg>
      <HomeWrapper>
        <HomeH1>How old is your musical taste?</HomeH1>
        <HomeText>Input your Spotify user and find out for yourself.</HomeText>
        <a href="http://localhost:5000/login">
          <Button>Login with Spotify</Button>
        </a>
      </HomeWrapper>
    </HomeBg>
  );
};

export default HomePage;
