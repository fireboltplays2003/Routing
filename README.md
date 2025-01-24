

---

# Simple HTTP Server with HTML Templates

## Description

This project demonstrates a basic HTTP server built using Node.js. The server dynamically serves multiple HTML pages and associated assets (CSS and images) from a `templates` folder. It listens on port 3000 and responds to various client requests with corresponding content, such as `Home`, `About`, and `Contact Us` pages.

### Features:
- Serves dynamic HTML pages (`Home`, `About`, `Contact Us`).
- Supports external CSS and images for styling and visual elements.
- Includes navigation between pages using hyperlinks.
- Built with Node.js core modules: `http`, `fs`, `url`, and `path`.

### Example:
When a client visits `http://localhost:3000`, they are presented with a styled homepage. They can navigate to the "About" or "Contact Us" pages through the navigation bar.

#### Example Output:
- **Homepage**: Features a book component with an image, author details, a description, and copyright information.
- **About Page**: Describes the purpose of the project and its mission.
- **Contact Us Page**: Includes a contact form for submitting name and email.

## Programmers

- **Stephanos Khoury**
- **Rula Yosef**

---

## Code

### JavaScript Server (`app.js`):
```javascript
const http = require("http");
const fs = require("fs");
const path = require("path");

// Read HTML templates
const home = fs.readFileSync(`${__dirname}/templates/page.html`);
const about = fs.readFileSync(`${__dirname}/templates/about.html`);
const contactUs = fs.readFileSync(`${__dirname}/templates/contact.html`);

// Read CSS files
const homeCSS = fs.readFileSync(`${__dirname}/templates/page.css`);
const aboutCSS = fs.readFileSync(`${__dirname}/templates/about.css`);
const contactCSS = fs.readFileSync(`${__dirname}/templates/contact.css`);

// Create HTTP server
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

// Start the server
server.listen(3000);
console.log("Server running at http://localhost:3000/");
```

---

## HTML Templates

### Homepage (`page.html`):
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Task4</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="/page.css">
</head>
<body>
  <div class="container">
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contactUs">Contact</a></li>
      </ul>
    </nav>
    <header>
      <h1>Book Component By Function</h1>
    </header>
    <main>
      <div class="img-center"><img src="/ex4.jpg" alt="Book Cover"></div>
      <p class="creator">By Marijn Haverbeke</p>
      <p class="description">Eloquent JavaScript: A modern guide to mastering JavaScript.</p>
      <p class="copyright">© 2021 Tania</p>
    </main>
  </div>
</body>
</html>
```

### About Page (`about.html`):
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>About Us</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="/about.css">
</head>
<body>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contactUs">Contact</a></li>
    </ul>
  </nav>
  <div class="container">
    <header>
      <h1>About Us</h1>
    </header>
    <main>
      <p>Welcome to our website! This project explores JavaScript resources for learners.</p>
    </main>
  </div>
</body>
</html>
```

### Contact Page (`contact.html`):
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Contact Us</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="/contact.css">
</head>
<body>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contactUs">Contact</a></li>
    </ul>
  </nav>
  <div class="container">
    <header>
      <h1>Contact Us</h1>
    </header>
    <main>
      <form action="#" method="post">
        <label for="name">Name:</label><br>
        <input type="text" id="name" name="name" required><br><br>
        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email" required><br><br>
        <button type="submit">Submit</button>
      </form>
    </main>
  </div>
</body>
</html>
```

---

