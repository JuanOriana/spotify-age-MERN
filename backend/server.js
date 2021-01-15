let express = require("express");
let request = require("request");
let querystring = require("querystring");
let cors = require("cors");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;
const scopes = "user-top-read user-library-read";
const redirect_uri =
  process.env.redirect_uri || "http://localhost:5000/callback";

app.use(express.json());
app.use(cors());

app.get("/login", function (req, res) {
  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: process.env.CLIENT_ID,
        scope: scopes,
        redirect_uri,
      })
  );
});

app.get("/callback", function (req, res) {
  let code = req.query.code || null;
  let authOptions = {
    url: "https://accounts.spotify.com/api/token",
    form: {
      code: code,
      redirect_uri,
      grant_type: "authorization_code",
    },
    headers: {
      Authorization:
        "Basic " +
        Buffer.from(
          process.env.CLIENT_ID + ":" + process.env.CLIENT_SECRET
        ).toString("base64"),
    },
    json: true,
  };
  request.post(authOptions, function (error, response, body) {
    var access_token = body.access_token;
    let uri = process.env.FRONTEND_URI || "http://localhost:3000";
    res.redirect(uri + "/analysis?access_token=" + access_token);
  });
});

app.listen(port);
