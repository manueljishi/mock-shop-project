const express = require("express");

const bodyParser = require("body-parser");
const path = require("path");
const expressHbs = require('express-handlebars');

const rootDir = require("./utils/path");
const shopRoutes = require("./routes/shop");
const adminRoutes = require("./routes/admin");

const app = express();

//Set global configuration value
app.engine('handlebars', expressHbs.engine({
  layoutsDir: 'src/views/layouts',
  defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')
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
  res.render('404', {pageTitle: 'Page Not Found'});
});

app.listen(3000);
