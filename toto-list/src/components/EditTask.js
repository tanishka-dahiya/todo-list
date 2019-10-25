import React ,{Component} from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import { Button } from 'reactstrap';
import './todo.css';
import './todo.css';

class EditTask extends Component {

    constructor(props) 
    {
      super(props);
      this.state = {value:this.props.data.title,isOpenDropdown:false,expireyTime:this.props.data.expireTime
      };
    }

    
  
     handleSubmit = e => {
        e.preventDefault();
        
        this.props.handleEdit(this.state.value,this.props.index,this.state.expireyTime);
       
    }

    handleChange=value=> {
        this.setState({
            value: value
          });
    }
    
    
     toggleFunction=()=>{
       console.log("gg")
      this.setState({
        isOpenDropdown:!this.state.isOpenDropdown
    });
      
      
    }
     changeValue=e=> {
      this.setState({
        expireyTime:e.currentTarget.textContent
    });
      
     
       
    }

 
  render(){
    
    
      return(<form onSubmit={this.handleSubmit}>
        <input
            type="text"
            className="input"
            name='title'
            value={this.state.value}
            placeholder="Edit task"
            onChange={e => this.handleChange(e.target.value)}
        />
        
       
  <br></br>{'    '}
  <br></br><br></br>
            <Dropdown isOpen={this.state.isOpenDropdown} toggle={this.toggleFunction}>
        <DropdownToggle caret>
          Expirey Time ({this.state.expireyTime})
        </DropdownToggle>
        <DropdownMenu>
                    {["None","30 sec","1 min","10 min","30 min"].map(e => {
                        return <DropdownItem id={e} key={e} onClick={this.changeValue}>{e}</DropdownItem>
                    })}
                </DropdownMenu>
      </Dropdown>
       <br></br>
      <br></br>
     
   <Button color="success">Edit</Button>      </form>);
  }

  }
  export default EditTask;