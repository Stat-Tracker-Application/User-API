import https from "https";
import fs from "fs";
import app from "./API.js";

const port = process.env.PORT || 5000;

const options = {
  ca: fs.readFileSync("./Certificates/stattrackerapp.test.csr"),
  key: fs.readFileSync("./Certificates/stattrackerapp.test.key"),
  cert: fs.readFileSync("./Certificates/stattrackerapp.test.crt"),
};
const server = https.createServer(options, app);

server.listen(port, function (req, res) {
  console.log(`Server is listening at port ${port}`);
});
