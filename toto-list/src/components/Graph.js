import React ,{Component} from 'react';
import { Doughnut } from 'react-chartjs-2';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {Line} from 'react-chartjs-2';

import { creatTodoActions,getTasks ,getTCompletedTasks,getDeletedTasks,getExpiredTasks} from './tododucks';




class PieChart extends Component {

  getOngoingData=()=>{
    const Tasks= this.props.IsTasks;
    var lucky = Tasks.filter(function(number) {
      return number.completed===false&&number.expired===false;})
      return lucky.length
   
    

  }  
  getCompletedData=()=>{
    const Tasks= this.props.IsTasks;
    var lucky = Tasks.filter(function(number) {
      return number.completed===true&&number.expired===false;})
      return lucky.length
   
    

  }  
  getExpiredData=()=>{
    const Tasks= this.props.IsTasks;
    var lucky = Tasks.filter(function(number) {
      return number.completed===false&&number.expired===true;})
      return lucky.length
   
    

  }  
  getDeletedData=()=>{
   const deletedTasks= this.props.IsDeleted;
   return deletedTasks.length;
 
  }
    
  
 
  render(){
    const deleted=this.getDeletedData();
    console.log("daeleted",deleted)
    const ongoing=this.getOngoingData();
    const completed=this.getCompletedData();

    const expired=this.getExpiredData();


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


  