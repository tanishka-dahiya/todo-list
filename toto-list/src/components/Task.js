import React ,{Component} from 'react';
import './todo.css';

class Task extends Component {

    constructor(props) 
    {
      super(props);
      this.state = {Seconds:100,
    timer:{}};
    }

    componentDidMount() 
{

    switch(this.props.task.expireTime) 
    {
        case "5 sec":
            this.setState({
                Seconds: 5
            });
          
          break;
        case "10 sec":
            this.setState({
                Seconds: 10
            });
          break;
        case "1 min":
            this.setState({
                Seconds: 60 
            });
          
          break;
        case "10 min":
            this.setState({
                Seconds: 600
            });
          
          break;
          
         
        default:
                this.setState({
                    Seconds: 0
                });
        
    }   
   const  countDown=()=>
        {
            const time=this.state.Seconds-1;
            this.setState({
                Seconds: time
              });
            
        }
let timers=setInterval(countDown, 1000);
        this.setState({
            timer:timers
          });
      
       
      
      
      
    }
  
    render() 
    
    { 
         if (this.state.Seconds === 0) 
        { 
            clearInterval(this.state.timer);
          }
        return (
            
            
            <div
                className="task"
                style={{ textDecoration: this.props.task.completed || this.state.Seconds===0 ? "line-through" : "" }}
                >{this.props.task.title}{'   '} Time left:{this.state.Seconds}  Seconds{'    '}
                <button style={{ background: "red" }} onClick={() => this.props.removeTask(this.props.key)}>x</button>
                <button onClick={() => this.props.completeTask(this.props.key)}>Complete</button>
            </div>
        );
    }
      

      

}
    
  
    
export default Task;
