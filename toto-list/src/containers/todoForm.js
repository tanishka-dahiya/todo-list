import React ,{ Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Task from '../components/Task';
import CreateTask from '../components/CreateTask';
import { creatTodoActions,getTasks ,getTCompletedTasks,getDeletedTasks,getExpiredTasks} from '../components/tododucks';
import EditTask from '../components/EditTask';
import { Jumbotron, Container } from 'reactstrap';
import LineChart from './LineChart';
import PieChart from './Graph'; 


import '../components/todo.css'



export class Todo extends Component {

    constructor(props) 
    {
      super(props);
      this.state = {timer:{},isEdit:false,task:{},index:100,Ongoingdata:[0],deleteddata:[0],expiredData:[0],Completeddata:[0],activeIndex:0,animating:false

        };
    }
    
  
    addTask = (title,expireTime) => {
     
       const tasks= this.props.IsTasks;
       var tempDate = new Date();
       const obj={ "title":title ,"expireTime":expireTime,completed:false,expired:false,created_date:tempDate}
       const newTasks = [...tasks, obj];
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
    handleEdit=(title,index,expirey_Time)=>{
       
        const newTasks =this.props.IsTasks;
        
        newTasks[index].title=title;
        newTasks[index].expireTime=expirey_Time;
        this.props.addTodo(newTasks);
        this.setState({
          isEdit:false,
         
        });



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
   
    
    return ( <div>
      
       { this.state.isEdit===false &&<div className="todo-container">
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
               
                </div>}
                
                {this.state.isEdit===true&&<div  className="todo-container">
                <div className="header">EDIT Task:</div> 
                <div className="tasks"><EditTask data={this.state.task}
                    handleEdit={this.handleEdit}
                    index={this.state.index}/></div>
                    
                    </div>}



                    <div>
                    <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Line Graph</h1>
          <p className="lead">This is a graph which represents the count of tasks completed,expired,deleted,Ongoing in every 10 seconds.</p>
          <LineChart/>
        </Container>
      </Jumbotron></div>




                
      <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Pie Chart</h1>
          <p className="lead">This is a Pie chart which represents total count of completed,Ongoing,deleted and expired Tasks.</p>
          <PieChart/>
        </Container>
      </Jumbotron></div>

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


