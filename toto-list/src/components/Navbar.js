import React ,{Component} from 'react';
import FaList from 'react-icons/lib/fa/list';
import { Input } from 'reactstrap';
import { creatTodoActions,getTasks } from './tododucks';
import { DropdownMenu, DropdownItem } from 'reactstrap';
import { MenuList } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';

import { connect } from 'react-redux';
import { compose } from 'redux';






import './Navbar.css';


class Navbar extends Component {

    constructor(props) 
    {
      super(props);
      this.state = {suggestion_value:[]
      };
    }

    
  
    handleChange=(e)=>
    {
      
      const Tasks= this.props.IsTasks;
      let final=[];
if(e.target.value!==""){
  Tasks.forEach(function(element) {
    if(element.title.includes(e.target.value) )  {
      final.push(element);
    }
    else{
      final=[]
    }
    
     })

}
else{
  final=[]
}
     
      
       this.setState({
        suggestion_value: final
      });
      console.log("r",this.state.suggestion_value)
      }
  
    
     
    
 
  render(){
    const action=this.state.suggestion_value
      return(
        <div>
        <div class="flex-container">
             <div class="icon"><FaList/></div>
              <div >To-Do</div> </div>
              {/* <div className="menu"><Input placeholder="Search..." onChange={this.handleChange}/>  
              <MenuList>
              {action.map(e => {
                        return <div className="list">
                           <MenuItem >{e.title}</MenuItem>
                           </div>
                    })}
        </MenuList>
                   
               
        
               </div> */}
         
                       
     
               
                      
              
 
  
 
</div>
      
        
      );
     

  }
}
 export default compose(
    connect(
      state => ({
        IsTasks: getTasks(state),
       


  
    }),
        { ...creatTodoActions }
    )
  )(Navbar);
