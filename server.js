const babel = require("babel-register");

babel({
  presets: ["react"],
});

const express = require("express");
const app = express();

app.use(express.static("public"));
const port = process.env.PORT || 4000;

const { renderToStaticMarkup: render } = require("react-dom/server");

app.get("/", (req, res) => {
  const App = require("./components/pages/App.jsx");
  res.send(render(App({ user: "<h2>Trying some funny business</h2>" })));
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
