import React ,{Component} from 'react';
import { Doughnut } from 'react-chartjs-2';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { creatTodoActions,getTasks ,getTCompletedTasks,getDeletedTasks,getExpiredTasks} from '../components/tododucks';




export class PieChart extends Component {
  constructor(props) 
  {
    super(props);
    this.state = {timer:{},Ongoingdata:[],deleteddata:[],expiredData:[],Completeddata:[]
      };
  }
  componentDidMount() 

  { const Tasks= this.props.IsTasks;
    const IsCompleted= this.props.IsCompleted;
    const IsExpired= this.props.IsExpired;
    const IsDeleted= this.props.IsDeleted;
    this.setState({
      Ongoingdata:[Tasks.length],
      deleteddata:[IsDeleted.length],
      expiredData:[IsExpired.length],
      Completeddata:[IsCompleted.length],
    
      

    })
     this.getLineGraphData()
    }
   
   countDown=()=>{
     //ongoing
       const Tasks= this.props.IsTasks;
    var lucky = Tasks.filter(function(number) {
      return number.completed===false&&number.expired===false;})
      this.setState({
        Ongoingdata:lucky.length
      });
    //completed
      
    var lucky1 = Tasks.filter(function(number) {
      return number.completed===true&&number.expired===false;})
      this.setState({
        Completeddata:lucky1.length
      });
      //Expired
      
 
    var lucky2 = Tasks.filter(function(number) {
      return number.completed===false&&number.expired===true;})
    
    
    this.setState({
      expiredData:lucky2.length
    });

   //Deletd
     const deletedTasks= this.props.IsDeleted;
     this.setState({
      deleteddata:deletedTasks.length
    });
 
    
    
      }

  getLineGraphData=()=>{
    let timers=setInterval(this.countDown,  1000);
    this.setState({
      timer:timers
    });

  }
 
    
  
 
  
 
 
  render(){
    const deleted=this.state.deleteddata;
   
    const ongoing=this.state.Ongoingdata;
    const completed=this.state.Completeddata;
    const expired=this.state.expiredData;
   

    const data = {
      labels: [
        'Deleted tasks',
        'Ongoing Tasks',
        'Completed tasks',
        'Expired tasks',
      ],
      datasets: [{
        data: [deleted, ongoing, completed,expired],
        backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#FF6364',
        ],
        hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#FF6364',
        ]
      }]
    };
  
      return(
        <Doughnut data={data}height={100} />
        
       
        
      
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
  )(PieChart);


  