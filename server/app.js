const express = require("express");
const app = express();
const PORT = 8080;
const todoRouter = require("./routes/todo");

//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", todoRouter);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
