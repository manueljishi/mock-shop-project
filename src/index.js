const express = require("express");

const bodyParser = require("body-parser");
const path = require("path");
const expressHbs = require('express-handlebars');

const rootDir = require("./utils/path");
const shopRoutes = require("./routes/shop");
const adminRoutes = require("./routes/admin");
const { get404 } = require("./controllers/error");

const app = express();

//Set global configuration value
app.engine('handlebars', expressHbs.engine({
  layoutsDir: 'src/views/layouts',
  defaultLayout: 'main'
}))
app.set('view engine', 'ejs');
app.set('views', 'src/views');

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
//Use to serve static content
app.use(express.static(path.join(rootDir, "public")));

app.use("/product", adminRoutes);
app.use("/", shopRoutes);

app.use("/", get404);

app.listen(3000);
