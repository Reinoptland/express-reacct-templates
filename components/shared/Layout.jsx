var React = require("react");

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link rel="stylesheet" href="./css/Layout.css" />
      </head>
      <body className="app-wrapper">{children}</body>
    </html>
  );
};

module.exports = Layout;
