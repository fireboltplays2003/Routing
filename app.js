//Programmers: Stephanos Khoury, Rula Yosef

const http = require("http");
const fs = require("fs");
const path = require("path");

const home = fs.readFileSync(`${__dirname}/templates/page.html`);
const about = fs.readFileSync(`${__dirname}/templates/about.html`);
const contactUs = fs.readFileSync(`${__dirname}/templates/contact.html`);

const homeCSS = fs.readFileSync(`${__dirname}/templates/page.css`);
const aboutCSS = fs.readFileSync(`${__dirname}/templates/about.css`);
const contactCSS = fs.readFileSync(`${__dirname}/templates/contact.css`);

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(home);
  } else if (pathName === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(about);
  } else if (pathName === "/contactUs") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(contactUs);
  } else if (pathName.match(/[.]css$/)) {
    if (pathName === "/page.css") {
      res.writeHead(200, { "Content-Type": "text/css" });
      res.end(homeCSS);
    } else if (pathName === "/about.css") {
      res.writeHead(200, { "Content-Type": "text/css" });
      res.end(aboutCSS);
    } else if (pathName === "/contact.css") {
      res.writeHead(200, { "Content-Type": "text/css" });
      res.end(contactCSS);
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("CSS file not found");
    }
  } else if (pathName.match(/[.]jpg$/)) {
    const imagePath = path.join(__dirname, "templates", pathName);
    const imageFile = fs.readFileSync(imagePath);
    res.writeHead(200, { "Content-Type": "image/jpeg" });
    res.end(imageFile);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 - Page Not Found</h1>");
  }
});

server.listen(3000);
console.log("Server running at http://localhost:3000/");
