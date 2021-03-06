import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  FetchBg,
  FetchWrapper,
  FetchH1,
  FetchText,
  FetchSubText,
  LoadWrapper,
  ProgressBar,
  ProgressLabel,
  ProgressBox,
  ProgressBarWrapper,
} from "./FetchPageElements";
import queryString from "query-string";

import "./loader.css";

const FetchPage = () => {
  const [name, setName] = useState("unknown user");
  const [age, setAge] = useState(0);
  //2020,2010,00,90,80,70,60,50,40,<40
  const [ageDivision, setAgeDivision] = useState([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
  ]);
  const ageLabels = [
    "2020s",
    "2010s",
    "2000s",
    "1990s",
    "1980s",
    "1970s",
    "1960s",
    "1950s",
    "1940s",
    "before 1940s",
  ];
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const { search } = useLocation();
  const { access_token } = queryString.parse(search);

  useEffect(() => {
    let totalTracks = 0;
    let totalSumYears = 0;
    const currYear = new Date().getFullYear();
    let ageCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let percentages = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    setIsLoading(true);

    // Read users top songs (value x2);
    fetch(
      "	https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=50",
      {
        method: "get",
        headers: new Headers({
          Authorization: "Bearer  " + access_token,
        }),
      }
    )
      .then((data) => data.json())
      .then((json) => {
        json.items.forEach((track) => {
          const currDate = parseInt(track.album.release_date.substring(0, 4));
          if (currDate > 0 && currDate < 2030) {
            let index = ((2029 - currDate) / 10) | 0;
            if (index < 0) index = 0;
            totalTracks += 2;
            ageCount[index] += 2;
            totalSumYears += (currYear - currDate) * 2;
          }
        });

        return fetch("https://api.spotify.com/v1/me/tracks?limit=50", {
          method: "get",
          headers: new Headers({
            Authorization: "Bearer  " + access_token,
          }),
        });
      })

      .then((data) => data.json())
      .then((json) => {
        json.items.forEach((item) => {
          const currDate = parseInt(
            item.track.album.release_date.substring(0, 4)
          );
          if (currDate > 0 && currDate < 2030) {
            let index = ((2029 - currDate) / 10) | 0;
            if (index < 0) index = 0;
            totalTracks += 1;
            ageCount[index] += 1;
            totalSumYears += currYear - currDate;
          }
        });

        const newAge = totalSumYears / totalTracks;
        setAge(newAge.toFixed(2));

        ageCount.forEach((n, idx) => (percentages[idx] = n / totalTracks));
        setAgeDivision(percentages);

        return fetch("https://api.spotify.com/v1/me", {
          method: "get",
          headers: new Headers({
            Authorization: "Bearer  " + access_token,
          }),
        });
      })
      .then((data) => data.json())
      .then((json) => {
        setName(json.display_name);
        setIsLoading(false);
      });
  }, [access_token]);

  if (isLoading) {
    return (
      <FetchBg isLoading={true}>
        <LoadWrapper>
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <FetchText>Loading...</FetchText>
        </LoadWrapper>
      </FetchBg>
    );
  }
  return (
    <FetchBg isLoading={false}>
      <FetchWrapper>
        <FetchH1>
          Hey {name}! Your musical taste is {age} year
          {age !== 1 ? "s" : ""} old.
        </FetchH1>
        <ProgressBox>
          {ageLabels.map((label, index) => {
            return (
              <ProgressBarWrapper>
                <ProgressLabel>{label}</ProgressLabel>
                <ProgressBar
                  progress={(ageDivision[index] * 100).toFixed(2) + "%"}
                />
              </ProgressBarWrapper>
            );
          })}
        </ProgressBox>
      </FetchWrapper>
    </FetchBg>
  );
};

export default FetchPage;
