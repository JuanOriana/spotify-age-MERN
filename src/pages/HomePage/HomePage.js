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
  const [user, setUser] = useState("");
  return (
    <HomeBg>
      <HomeWrapper>
        <HomeH1>How old is your musical taste?</HomeH1>
        <HomeText>Input your Spotify user and find out for yourself.</HomeText>
        <div>
          <Input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <a href="http://localhost:5000/login">
            <Button>Go!</Button>
          </a>
        </div>
      </HomeWrapper>
    </HomeBg>
  );
};

export default HomePage;
