import React ,{ useState, useEffect } from 'react';
import CreateTask from './CreateTask';
import Task from './Task';
import './todo.css';




function Todo() {
   
    const [tasksRemaining, setTasksRemaining] = useState(0);
    const [tasks, setTasks] = useState([]);
    console.log(tasks);
    useEffect(() => { 
        setTasksRemaining(tasks.filter(task => !task.completed).length) 
      });


    const addTask = (title,expireTime) => {
        console.log(title,expireTime);
        const newTasks = [...tasks, { title, completed: false ,expireTime}];
        setTasks(newTasks);
    };

    const completeTask = index => {
        const newTasks = [...tasks];
        newTasks[index].completed = true;
        setTasks(newTasks);
    };

    const removeTask = index => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    return (
        <div className="todo-container">
                <div className="header">Pending tasks ({tasksRemaining})</div>
                <div className="tasks">
                    {tasks.map((task, index) => (
                        <Task
                        task={task}
                        index={index}
                        completeTask={completeTask}
                        removeTask={removeTask}
                        key={index}
                        />
                    ))}
                </div>
                <div className="create-task" >
                    <CreateTask addTask={addTask} />

                </div>
            </div>
    );
}
export default Todo;


