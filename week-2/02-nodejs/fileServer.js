/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */
const express = require("express");
const fs = require("fs").promises;
const path = require("path");
const app = express();
const port = 3000;
const filesDirectory = "./files/";

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal System Error" });
});

app.get("/files", async (req, res, next) => {
  try {
    const fileNames = await fs.readdir(filesDirectory);
    res.status(200).json(fileNames);
  } catch (error) {
    next(error);
  }
});
// Here is an improved version of the 'arrow_function' function:

app.get("/file/:filename", async (req, res, next) => {
  try {
    const { filename } = req.params;
    console.log(filename);
    const filePath = path.join(filesDirectory, filename);
    const fileContent = await fs.readFile(filePath, "utf-8");
    res.status(200).send(fileContent);
  } catch (error) {
    if (error.code === "ENOENT") {
      res.status(404).send("File not found");
    } else {
      next(error);
    }
  }
});

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});

module.exports = app;
