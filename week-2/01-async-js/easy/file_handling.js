const fs = require("fs");
fs.readFile("abc.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("error here");
  } else {
    console.log(`File Contents: \n${data}`);
  }
  let updatedData = data + "\n" + "Hello there";
  fs.writeFile("abc.txt", updatedData, "utf-8", (err) => {
    if (err) {
      console.error("error write");
    }
  });
});
