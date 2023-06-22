const React = require("react");
const Layout = require("../shared/Layout");

const App = ({ user }) => {
  return (
    <Layout>
      <h1>Hello, {user}</h1>
    </Layout>
  );
};

module.exports = App;
