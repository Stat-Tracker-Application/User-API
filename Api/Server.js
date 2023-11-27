import http from "http";
import app from "./API.js";

const port = 5200;

const server = http.createServer(app);

server.listen(port, function (req, res) {
  console.log(`Server is listening at port ${port}`);
});
