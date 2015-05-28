var taskStorage = (function(){

            function getAllTasks(){
                var result = [];
                for(var i=0; i<localStorage.length; i++){
                    var taskId = localStorage.key(i);
                    var taskName = localStorage.getItem(taskId);
                    var obj = {
                        id : taskId,
                        name : taskName
                    };
                    result.push(obj);
                }
                return result;
            }
            function removeTask(key){
                 /*Remove from Stroage */
                localStorage.removeItem(key);
                /******************/
            }
            function addTask(taskName){
                /*Storage*/
                var taskId = Date.now().toString();
                localStorage.setItem(taskId, taskName);
                return {
                    id : taskId,
                    name : taskName
                };
                /**************/
            }


            return{
                getAll : getAllTasks,
                remove : removeTask,
                add : addTask
            };

        })();
