// =========== REQUIRE MODULES ==============
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = 8002;

// =========== BODY-PARSER =================
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Points to the angular file to server the index.html
// create file in angular with this command below in the angular cli
// ng build --watch 
app.use(express.static(__dirname + '/public/dist/public'));

// =========== LISTEN PORT ===========
app.listen(port, function () {
    console.log("You are listening on port 5000")
})

// =========== MONGOOSE CONNECTION ===========
// Here is where you can change the database information
// from the name to the collections 

mongoose.connect('mongodb://localhost/database-table');
var UserSchema = new mongoose.Schema({
    first_name: { type: Number, required: [true, "First name cannot be empty"], minlength: 1 },
}, { timestamps: true });

const user = mongoose.model('User', UserSchema)
mongoose.Promise = global.Promise;

// =========== ROUTES ===========

app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});