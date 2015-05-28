var taskStorage = (function(){

            function getAllTasks(){
                var result = [];
                for(var i=0; i<localStorage.length; i++){
                    var taskId = localStorage.key(i);
                    var taskDataAsString = localStorage.getItem(taskId);
                    var obj = JSON.parse(taskDataAsString);
                    result.push(obj);
                }
                return result;
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
                return newTask;
            }
            function toggleTask(id){
                var task = JSON.parse(localStorage.getItem(id));
                task.isCompleted = !task.isCompleted;
                localStorage.setItem(id, JSON.stringify(task));
            }

            return{
                getAll : getAllTasks,
                remove : removeTask,
                add : addTask,
                toggle : toggleTask
            };

        })();
