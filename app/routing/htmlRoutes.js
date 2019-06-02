//Route to the Homepage
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public", "home.html"));
})

//Route to the survey page
app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "../public", "survey.html"));
})