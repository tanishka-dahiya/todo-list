import React ,{Component} from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {Line} from 'react-chartjs-2';
import './todo.css';

import { creatTodoActions,getTasks ,getTCompletedTasks,getDeletedTasks,getExpiredTasks} from './tododucks';




class LineChart extends Component {
  constructor(props) 
  {
    super(props);
    this.state = {timer:{},Ongoingdata:[],deleteddata:[],expiredData:[],Completeddata:[],isloading:true,isDo:true,timeStamp:[]
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
      timeStamp:[new Date()]
      

    })
     this.getLineGraphData()
    }
   
   countDown=()=>{
    const Tasks= this.props.IsTasks;
   // Ongoing
    var lucky= Tasks.filter(function(number) {
      return number.completed===false&&number.expired===false;})
      console.log("drftgy88",this.state.lucky)
      var current=this.state.Ongoingdata;
      let ss=this.state.timeStamp;
      const final=[...current,lucky.length]
      var currnetTimeStamp=new Date()
     
      let sss=[...ss,currnetTimeStamp]

      if(final.length>=5){
        final.shift();
       
        sss.shift();
        
      }
      
    
    this.setState({
      Ongoingdata:final,
      timeStamp:sss
    })
      
      
     
      
       //completed
       var lucky2= Tasks.filter(function(number) {
        return number.completed===true&&number.expired===false;})
       
        var current2=this.state.Completeddata
        const final2=[...current2,lucky2.length]
        if(final2.length>=5){
          final2.shift();
        }
        
      this.setState({
        Completeddata:final2})

 //Expired
 var lucky3= Tasks.filter(function(number) {
  return number.completed===false&&number.expired===true;})
 
  var current3=this.state.expiredData
  const final3=[...current3,lucky3.length]
  if(final3.length>=5){
    final3.shift();
  }
this.setState({
  expiredData:final3})

//Deleted
  const deletedTasks= this.props.IsDeleted;

 var deleteddata=this.state.deleteddata
var result4=[...deleteddata,deletedTasks.length]
if(result4.length>=5){
  result4.shift();
}
this.setState({
  deleteddata:result4})
      }

  getLineGraphData=()=>{
    let timers=setInterval(this.countDown,  10000);
    this.setState({
      timer:timers
    });

  }
 
    
  
 
  render(){
    console.log("on",this.state.Ongoingdata,"dele",this.state.deleteddata,"expire",this.state.expiredData,"com",this.state.Completeddata)
   
    if(this.state.isDo){
      if(this.state.Ongoingdata.length>=0){
        this.setState({
          isloading:false,
          isDo:false
        });
        
      }
    }
   

    
    const data2 = {
      labels: this.state.timeStamp,
      datasets: [
        {
          label: ['Ongoing Tasks'],
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,0.4)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,0.4)',
          pointBackgroundColor: 'rgba(75,192,192,0.4)',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,0.4)',
          pointHoverBorderColor: 'rgba(75,192,192,0.4)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: this.state.Ongoingdata,
        }, 
          {
            label: ["Expired tasks"],
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'red',
            borderColor: 'red',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'red',
            pointBackgroundColor: 'red',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'red',
            pointHoverBorderColor: 'red',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: this.state.expiredData,
          },
          {
            label: ["Deleted tasks"],
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'orange',
            borderColor: 'orange',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'orange',
            pointBackgroundColor: 'orange',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'orange',
            pointHoverBorderColor: 'orange',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: this.state.deleteddata,
          },
          {
            label: ["Completed tasks"],
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'green',
            borderColor: 'green',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'green',
            pointBackgroundColor: 'green',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'green',
            pointHoverBorderColor: 'green',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: this.state.Completeddata,
          }
        
      ]
      
    };
      return( 
        <div>
      { this.state.isloading  && <div class="loader"></div>}
       
      { !this.state.isloading  &&   <Line data={data2} height={50} />}
        
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
  )(LineChart);


  