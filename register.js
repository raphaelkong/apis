// Register module

var userById = {};
var userByName = {};

function register(data){
    // set object to id or name
    userById[data.id] = data;
    userByName[data.name] = data;
}

function getById(id){
        return userById[id];
}
function getByName(name){
        return userByName[name];
}
function removeById(id){
    if(userById[id]){
        userSession = userById[id];
        delete userByName[userSession.name];
        delete userById[id];
    }
}
function removeByName(name){
    if(userByName[name]){
        userSession = userByName(name);
        delete userByName(name);
        delete userById(userSession.id);
    }
}
function isIdConnected(id){
    if(getById(id)){
        return true;
    }
    else{
        return false;
    }
}
function isNameConnected(name){
    if(getByName(name)){
        return true;
    }
    else{
        return false;
    }
}
