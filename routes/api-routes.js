let db = require("../models")

module.exports = function(app){
    app.get("/api/user", function(req, res){
        db.User.findAll({})
        .then(function(data){
            console.log(data)
            res.json(data);
        })
    })
app.post("/api/user", function(req,res){
    console.log("---POST: ", req.body)
    db.User.create({
        name: req.body.name,
        password: req.body.password
    }).then(function(data){
        console.log(data)
        res.json("done")
    })
})

}