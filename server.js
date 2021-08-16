var express = require("express");
var app = express();
var path = require("path");
var todoRoutes = express.Router();

var bodyParser = require('body-parser');
var cors = require("cors");
var mongoose = require('mongoose');


var srcpath = path.join(__dirname, '/public');

app.use(express.static('public'));
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '5mb' }));

app.use(bodyParser.json());
app.use(cors());


mongoose.connect(`mongodb://localhost:27017/todos`, { useNewUrlParser: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log(`Mongoose connnection established`)
});

let Todo = require("./todo.model");

app.use('/todos', todoRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});


//api for get data from database  
todoRoutes.route("/getdata").get(function (req, res) {
    Todo.find({}, function (err, data) {
        if (err) {
            res.send(err);
            console.log(err);
        }
        else {
            res.send(data);
            res.json(data);
        }
    });
})


//api for Delete data from database  
todoRoutes.route("/api/Removedata").post(function (req, res) {
    Todo.remove({ _id: req.body.id }, function (err) {
        if (err) {
            alert(124);
            res.send(err);
        }
        else {
            res.send({ data: "Record has been Deleted..!!" });
        }
    });
})


//api for Update data from database  
todoRoutes.route("/api/Updatedata").post(function (req, res) {
    Todo.findByIdAndUpdate(req.body.id, { name: req.body.name, address: req.body.address, contact: req.body.contact, email: req.body.email },
        function (err) {
            if (err) {
                res.send(err);
                return;
            }
            res.send({ data: "Record has been Updated..!!" });
        });
})


//api for Insert data from database
todoRoutes.route("/add").post(function (req, res) {
    var todo = new Todo(req.body);
    todo.save(function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.send({ data: "Record has been Inserted..!!" });
        }
    });
})

// call by default index.html page  
app.get("*", function (req, res) {
    res.sendFile(srcpath + '/index.html');
})