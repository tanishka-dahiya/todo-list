import React ,{Component} from 'react';
import FaCheck from 'react-icons/lib/fa/check';
import FaPencil from 'react-icons/lib/fa/pencil';
import FaTrash from 'react-icons/lib/fa/trash';




import './todo.css';

class Task extends Component {

    constructor(props) 
    {
      super(props);
      this.state = {
          Seconds:0,
          minutes:100,
          timer:{},
          IsNone:false,
          currentdate:new Date(),
          IsCompleted:false,
         
    }}

  

    
    componentDidMount() 
    { 
    const temp=this.state.currentdate-this.props.task.created_date;
    if(this.props.task.expireTime==="None"){
        this.setState({
            IsNone:true
             });
    }
    else{console.log("expire",this.props.task.expireTime)
        if(temp<15)
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
                       
                    
                }   
               
            }
            else{
                
              let  seconds = Math.floor((temp / 1000) % 60);
              let  minutes = Math.floor((temp / (1000 * 60)) % 60);
                
            
            
              minutes = (minutes < 10) ? "0" + minutes : minutes;
              seconds = (seconds < 10) ? "0" + seconds : seconds;
            
             
               
            
             
                        switch(this.props.task.expireTime) 
                {
                    case "30 sec":
                        this.setState({
                            Seconds:30-seconds,minutes:0
                        });
                      
                      break;
                    case "1 min":
                        this.setState({
                            Seconds: 60-seconds,minutes:0
                        });
                      break;
                    case "10 min":
                        this.setState({
                            Seconds: 60-seconds ,minutes:9-minutes
                        });
                      
                      break;
                    case "30 min":
                        this.setState({
                            Seconds: 60-seconds,minutes:29-minutes
                        });
                      
                      break;
                      
                     
                      default:
                              
                          
                    
                
            
                    
                
            
              }
             }
            
            }



    

   const  countDown=()=>
        {


            if(this.state.Seconds===0){
                if(this.state.minutes !==0){
                    this.setState({
                        Seconds: 60,minutes:this.state.minutes-1
                      });
                }
            }
            else
            {
                    const time=this.state.Seconds-1;
                 this.setState({
                Seconds: time
              });
            }
                


            
            
        }
        
        if(this.state.minutes!=="undefined"){
            
            let timers=setInterval(countDown, 1000);
            this.setState({
                timer:timers
              });
        }
        
      
       
     
      
      
    }

    render() 
    
    
    {
       
         if (this.state.Seconds <= 0 && this.state.minutes<=0) 
        {   
           this.props.expireTask(this.props.index)
            clearInterval(this.state.timer);
           
            
          } if ( this.props.task.completed) 
          {   console.log("here")
              clearInterval(this.state.timer);
             
             
              
            }
            
        return (
            <div  className="task" style={{ textDecoration: this.props.task.completed || (this.state.Seconds===0 &&this.state.minutes===0)? "line-through" : "" }}>
                {this.props.task.title}{'   '}
                <button>{this.state.IsNone ? ' No Time Limit ' : `Time Left:${this.state.minutes}:${this.state.Seconds}`}</button>
                <button onClick={() => this.props.removeTask(this.props.index)}><FaTrash/></button>
             <button onClick={() => this.props.completeTask(this.props.index)}><FaCheck/></button>
              <button onClick={() => this.props.editTask(this.props.index)}><FaPencil/></button>
            </div>
            
              
        );
    }
      

      

}
    
  
    
export default Task;
