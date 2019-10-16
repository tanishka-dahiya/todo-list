import React ,{Component} from 'react';
import './todo.css';

class Task extends Component {

    constructor(props) 
    {
      super(props);
      this.state = {Seconds:100,minutes:100,
        timer:{}};
    }

    componentDidMount() 
  {

    switch(this.props.task.expireTime) 
    {
        case "30 sec":
            this.setState({
                Seconds:30,minutes:0
            });
          
          break;
        case "1 min":
            this.setState({
                Seconds: 0,minutes:1
            });
          break;
        case "10 min":
            this.setState({
                Seconds: 0 ,minutes:10
            });
          
          break;
        case "30 min":
            this.setState({
                Seconds:0,minutes:30
            });
          
          break;
          
         
        default:
                this.setState({
                    Seconds: 0,minutes:0
                });
        
    }   
   

   const  countDown=()=>
        {


            if(this.state.Seconds===0){
                if(this.state.minutes !==0){
                    this.setState({
                        Seconds: 60,minutes:this.state.minutes-1
                      });
                }}
                else{
                    const time=this.state.Seconds-1;
                 this.setState({
                Seconds: time
              });
            }
                


            
            
        }
        let timers=setInterval(countDown, 1000);
        this.setState({
            timer:timers
          });
      
       
      
      
      
    }
  
    render() 
    
    
    { console.log(this.props.index)
         if (this.state.Seconds === 0 && this.state.minutes===0) 
        { 
            clearInterval(this.state.timer);
          }
        return (
            
            
            <div
                className="task"
                style={{ textDecoration: this.props.task.completed || this.state.Seconds===0 ? "line-through" : "" }}
                > <button style={{ background: "green" }} >Time left: {this.state.minutes} : {this.state.Seconds}  Seconds</button>
                {this.props.task.title}{'   '} 
               
                                <button style={{ background: "red" }} onClick={() => this.props.removeTask(this.props.index)}>x</button>
                <button onClick={() => this.props.completeTask(this.props.index)}>Complete</button>
            </div>
        );
    }
      

      

}
    
  
    
export default Task;
