import React ,{Component} from 'react';
import './todo.css';

class Task extends Component {

    constructor(props) 
    {
      super(props);
      this.state = {Seconds:0,minutes:100,
        timer:{},IsNone:false};
    }

    componentDidMount() 
  {

    switch(this.props.task.expireTime) 
    {case "None":
    this.setState({
        IsNone:true
    });
  
  break;
  
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
        if(this.state.Seconds!=="undefined"){
            let timers=setInterval(countDown, 1000);
            this.setState({
                timer:timers
              });
        }
        
      
       
      
      
      
    }
  
    render() 
    
    
    {
         if (this.state.Seconds === 0 && this.state.minutes===0) 
        {   console.log("expired called",this.props.index)
        this.props.expireTask(this.props.index)
            clearInterval(this.state.timer);
           
            
          } if ( this.props.task.completed) 
          {   
              clearInterval(this.state.timer);
             
              
            }
        return (
            
            <div>{this.state.IsNone===true && <div
                className="task"
                style={{background:"red", textDecoration: this.props.task.completed || this.state.Seconds===0 ? "line-through" : "" }}
                > <button style={{  background: "green" }} >
                    No time Limit</button>
                {this.props.task.title}{'   '} 
               
                                <button style={{ background: "red" }} onClick={() => this.props.removeTask(this.props.index)}>x</button>
                <button onClick={() => this.props.completeTask(this.props.index)}>Complete</button>
                <button onClick={() => this.props.editTask(this.props.index)}>Edit</button>
            </div>}
           {this.state.minutes<1 && <div
                className="task"
                style={{background:"red", textDecoration: this.props.task.completed || this.state.Seconds===0 ? "line-through" : "" }}
                > <button style={{  background: "green" }} >
                    Time left: {this.state.minutes} : {this.state.Seconds}  Seconds</button>
                {this.props.task.title}{'   '} 
               
                                <button style={{ background: "red" }} onClick={() => this.props.removeTask(this.props.index)}>x</button>
                <button onClick={() => this.props.completeTask(this.props.index)}>Complete</button>
                <button onClick={() => this.props.editTask(this.props.index)}>Edit</button>
            </div>}
            {this.state.minutes>=1 &&this.state.minutes<15 &&<div
            className="task"
            style={{  background:"orange",textDecoration: this.props.task.completed || this.state.Seconds===0 ? "line-through" : "" }}
            > <button style={{ background: "green" }} >Time left: {this.state.minutes} : {this.state.Seconds}  Seconds</button>
            {this.props.task.title}{'   '} 
           
                            <button style={{ background: "red" }} onClick={() => this.props.removeTask(this.props.index)}>x</button>
            <button onClick={() => this.props.completeTask(this.props.index)}>Complete</button>
            <button onClick={() => this.props.editTask(this.props.index)}>Edit</button>
        </div>}
{this.state.minutes>15 &&this.state.minutes<31 &&    <div
                className="task"
                style={{ background:"green",textDecoration: this.props.task.completed || this.state.Seconds===0 ? "line-through" : "" }}
                > <button style={{ background: "green" }} >Time left: {this.state.minutes} : {this.state.Seconds}  Seconds</button>
                {this.props.task.title}{'   '} 
               
                                <button style={{ background: "red" }} onClick={() => this.props.removeTask(this.props.index)}>x</button>
                <button onClick={() => this.props.completeTask(this.props.index)}>Complete</button>
                <button onClick={() => this.props.editTask(this.props.index)}>Edit</button>
            </div>}
            </div>
        );
    }
      

      

}
    
  
    
export default Task;
