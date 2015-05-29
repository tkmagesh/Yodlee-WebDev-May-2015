(function(){
    window.addEventListener("DOMContentLoaded", init);
    var olTaskList = null,
        btnAdd = null,
        btnRemoveCompleted = null;

    var taskCount = 0;

    function init(){
        btnAdd = document.getElementById("btnAdd");
        btnAdd.addEventListener("click", onBtnAddClick);

        btnRemoveCompleted = document.getElementById("btnRemoveCompleted");
        btnRemoveCompleted.addEventListener("click", onBtnRemoveCompletedClick);

        olTaskList = document.getElementById("olTaskList");
        olTaskList.addEventListener("click", onTaskItemClick);

        taskStorage.getAll();
    }

    function onBtnRemoveCompletedClick(){
        for(var i=olTaskList.children.length-1; i >= 0; i--){
            var taskItem = olTaskList.children[i];
            if (taskItem.classList.contains("completed")){
                var key = taskItem.getAttribute("taskId");
                taskStorage.remove(key);
                taskItem.remove();
            }
        }
    }
    function onTaskItemClick(evtArg){
        var taskItem = evtArg.target;
        taskStorage.toggle(taskItem.getAttribute("taskId"));
        taskItem.classList.toggle("completed");
    }
    taskStorage.addListenerForNewTask( function(newTask){
        addTaskToList(newTask);
    });
    taskStorage.addListenerForNewTask( function(newTask){
        ++taskCount;
        document.getElementById("taskCount").innerHTML = taskCount;
    });
    function onBtnAddClick(){
        var txtTask = document.getElementById("txtTask");
        var taskName = txtTask.value;
        var newTask = taskStorage.add(taskName);

    }
    function addTaskToList(taskObj){
        var newTaskItem = document.createElement("li");
        newTaskItem.innerHTML = taskObj.name;
        newTaskItem.setAttribute("taskId", taskObj.id);
        if(taskObj.isCompleted)
            newTaskItem.classList.add("completed");
        olTaskList.appendChild(newTaskItem);

    }
})();
