var mongoose=require('mongoose');

var tasksSchema=mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    task_name:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    label:{
        type:String,
        required:true
    }
});

var Tasks=module.exports=mongoose.model('Tasks',tasksSchema);

module.exports.addTasks=function(task,callback){
    Tasks.create(task,callback);
}

module.exports.getTasks=function(callback,limit){
    Tasks.find(callback).limit(limit);
}
module.exports.getTaskById=function(tasks,callback){
    Tasks.findById(id,callback);
}