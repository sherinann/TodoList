var mongoose=require('mongoose');

var usersSchema=mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    
    password:{
        type:String,
        required:true
    }
});

var Users=module.exports=mongoose.model('Users',usersSchema);

module.exports.getUsers=function(callback,limit){
    Users.find(callback).limit(limit);
}
module.exports.getUserkById=function(users,callback){
    Users.findById(id,callback);
}
module.exports.addUser=function(user,callback){
    Users.create(user,callback);
}