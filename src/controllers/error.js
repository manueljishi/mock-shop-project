exports.get404 = (req, res) => {
    //res.sendFile(path.join(rootDir, "views", "404.html"));
    res.render('404', { pageTitle: 'Page Not Found', path: "error" });
}