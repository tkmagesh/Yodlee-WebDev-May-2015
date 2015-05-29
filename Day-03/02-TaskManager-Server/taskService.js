var taskService = (function(){
    return {
        getAll : function(onSuccess){
            var req = new XMLHttpRequest();
            req.addEventListener("readystatechange", function(){
                if (req.readyState === 4 && req.status === 200){
                    var dataAsString = req.responseText;
                    var tasks = JSON.parse(dataAsString);
                    onSuccess(tasks);
                }
            });
            req.open("GET", "http://localhost:3000/tasks", true);
            req.send();
        },
        add : function(taskName, onSuccess){
            var data = {
                name : taskName,
                isCompleted : false
            };
            var req = new XMLHttpRequest();
            req.addEventListener("readystatechange", function(){
                if (req.readyState === 4 && req.status === 201){
                    var dataAsString = req.responseText;
                    var newTask = JSON.parse(dataAsString);
                    onSuccess(newTask);
                }
            });
            req.open("POST", "http://localhost:3000/tasks", true);
            req.setRequestHeader("content-type", "application/json");
            req.send(JSON.stringify(data));
        }
    }
})()
