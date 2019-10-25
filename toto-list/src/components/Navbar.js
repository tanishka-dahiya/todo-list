import React ,{Component} from 'react';
import FaList from 'react-icons/lib/fa/list';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';





import './Navbar.css';


class Navbar extends Component {

    // constructor(props) 
    // {
    //   super(props);
    //   this.state = {value:this.props.data.title,isOpenDropdown:false,
    //   };
    // }

    
  
   
 
  render(){
    
      return(
        
        <div class="flex-container">
             <div class="icon"><FaList/></div>
              <div >To-Do</div>
              <div><Input placeholder="Search..." />
       </div>
              
       
      />
                       
                  
              
              
         
 
  
 
</div>
      
        
      );
     

  }
}
  export default Navbar;