import React ,{ Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Task from './Task';
import CreateTask from './CreateTask';
import { creatTodoActions,getTasks ,getTCompletedTasks,getDeletedTasks,getExpiredTasks} from './tododucks';
import EditTask from './EditTask'
import './todo.css';


class Todo extends Component {

    constructor(props) 
    {
      super(props);
      this.state = {isEdit:false,task:{},index:100
        };
    }

    



    addTask = (title,expireTime,completed,expired) => {
        
       const tasks= this.props.IsTasks;
       console.log("dfgh",tasks)
       const obj={ "title":title ,"expireTime":expireTime,completed:false,expired:false}
       const newTasks = [...tasks, obj];
       console.log("gmw",newTasks)
       
        console.log("my new array",newTasks)
        this.props.addTodo(newTasks);
     
    };
    editTask=(index)=>{
        const tasks= this.props.IsTasks;
        this.setState({
            isEdit:true,
            task:tasks[index],
            index:index
          });
         
          
          
      
    };
    handleEdit=(title,index)=>{
       
        const newTasks =this.props.IsTasks;
        newTasks[index].title=title;
        
        this.props.addTodo(newTasks);



    }

    completeTask = index => {
        const newTasks =this.props.IsTasks;
      if(newTasks[index].expired===false )  { newTasks[index].completed = true;
        
        this.props.addTodo(newTasks);}
        else(alert("Task is expired already"))
       
    };
    

    removeTask = index => {
        const tasks= this.props.IsTasks;
        
        const expiredFirst= this.props.IsDeleted;
        
        const newTasks = [...tasks];
       const deleted= newTasks.splice(index, 1);
       

       const final=[...expiredFirst,deleted]
     
      this.props.taskDeleted(newTasks,final);
    };
    expireTask = index => {
    
        const newTasks =this.props.IsTasks;
        
        newTasks[index].expired = true;
        
      this.props.addTodo(newTasks);
    };
   render(){
    const tasks= this.props.IsTasks;
   
    return (
        <div className="todo-container">
                 <div className="header">Create Task</div> 
                <div className="tasks">

{
  
    tasks.map((task, index) => {
      return  <Task
      task={task}
      index={index}
      completeTask={this.completeTask}
      editTask={this.editTask}
      removeTask={this.removeTask}
      expireTask={this.expireTask}
      key={index}
                        />
      })
}



                   
                </div>
                <div className="create-task" >
                    <CreateTask addTask={this.addTask} />

                </div>
                {this.state.isEdit===true&&<div>"EDIT Your TODO:
                    <EditTask data={this.state.task}
                    handleEdit={this.handleEdit}
                    index={this.state.index}/>
                </div>}
                </div>
               
            
    );
}
}

export default compose(
    connect(
      state => ({
        IsTasks: getTasks(state),
        IsCompleted: getTCompletedTasks(state),
        IsExpired: getExpiredTasks(state),
        IsDeleted: getDeletedTasks(state),


  
    }),
        { ...creatTodoActions }
    )
  )(Todo);


