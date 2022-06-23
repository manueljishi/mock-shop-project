const express = require("express");

const bodyParser = require("body-parser");
const path = require("path");

const rootDir = require("./utils/path");
const shopRoutes = require("./routes/shop");
const adminRoutes = require("./routes/admin");

const app = express();

//Set global configuration value
app.set('view engine', 'pug')
app.set('views', 'src/views')

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
//Use to serve static content
app.use(express.static(path.join(rootDir, "public")));

app.use("/product", adminRoutes.routes);
app.use("/", shopRoutes);

app.use("/", (req, res) => {
  //res.sendFile(path.join(rootDir, "views", "404.html"));
  res.render('404');
});

app.listen(3000);
