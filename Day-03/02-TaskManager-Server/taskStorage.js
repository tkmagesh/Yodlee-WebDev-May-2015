var taskStorage = (function(){
    var addedCallbacks = [];
    function getAllTasks(){

        for(var i=0; i<localStorage.length; i++){
            var taskId = localStorage.key(i);
            var taskDataAsString = localStorage.getItem(taskId);
            var obj = JSON.parse(taskDataAsString);
            for(var j=0; j<addedCallbacks.length; j++){
                var callback = addedCallbacks[j];
                callback(obj);
            }
        }

    }
    function removeTask(key){
        localStorage.removeItem(key);
    }
    function addTask(taskName){
        var taskId = Date.now().toString();
        var newTask = {
            id : taskId,
            name : taskName,
            isCompleted : false
        };
        localStorage.setItem(taskId, JSON.stringify(newTask));
        for(var i=0; i<addedCallbacks.length; i++){
            var callback = addedCallbacks[i];
            callback(newTask);
        }
    }
    function toggleTask(id){
        var task = JSON.parse(localStorage.getItem(id));
        task.isCompleted = !task.isCompleted;
        localStorage.setItem(id, JSON.stringify(task));
    }
    function addListenerForNewTask(callback){
        addedCallbacks.push(callback);
    }
    return{
        getAll : getAllTasks,
        remove : removeTask,
        add : addTask,
        toggle : toggleTask,
        addListenerForNewTask : addListenerForNewTask
    };

})();
