const fs = require("fs");

fs.readFile("abc.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("ERRor here");
  } else {
    let processedData = data.replace(/\s+/g, " ");
    fs.writeFile("abc.txt", processedData, "utf-8", (err) => {
      if (err) {
        console.error("err");
      }
    });
  }
});
