const express = require("express");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const rootDir = require("./utils/path");
const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/product", adminRoutes);
app.use("/", shopRoutes);

app.use("/", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "404.html"));
});

app.listen(3000);
