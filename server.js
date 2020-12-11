const app = require("./src/app");
const port = process.env.PORT;

app.listen(port, () => {
  console.info(`Listening on port ${port}`);
});
