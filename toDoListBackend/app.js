var mongoose=require("mongoose");
var cors=require("cors");
var express=require("express");
var app=express();
app.use(cors());
var bodyParser=require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
  }));

Tasks=require('./models/tasks');
Users=require('./models/users');

mongoose.connect('mongodb://localhost/todolist',{useMongoClient:true});
var db=mongoose.connection;
app.get('/',function(req,res){
    res.send('hello world');
});
app.get('/api/tasks',function(req,res){
    Tasks.getTasks(function(err,tasks){
        if(err){
            throw err;
        }
        res.json(tasks);
    });
});

app.post('/api/users',function(req,res){
    var user=req.body;
    //console.log(req.body.text);
    Users.addUser(user,function(err,user){
        if(err){
            throw err;
        }
        res.json(user);
    });
});

app.post('/api/tasks',function(req,res){
    var tasks=req.body;
    //console.log(req.body.text);
    Tasks.addTasks(tasks,function(err,tasks){
        if(err){
            throw err;
        }
        res.json(tasks);
    });
});


/*app.get('/api/tasks/:_id',function(req,res){
    Tasks.getTaskById(req.params._id,function(err,tasks){
        if(err){
            throw err;
        }
        res.json(tasks);
    });
});*/

app.listen(9000);
console.log("started on 9000");