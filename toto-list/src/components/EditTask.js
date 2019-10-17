import React ,{Component} from 'react';

import { Button } from 'reactstrap';
import './todo.css';
import './todo.css';

class EditTask extends Component {

    constructor(props) 
    {
      super(props);
      this.state = {value:this.props.data.title,isOpenDropdown:false,
      };
    }

    
  
     handleSubmit = e => {
        e.preventDefault();
        
        this.props.handleEdit(this.state.value,this.props.index);
       
    }

    handleChange=value=> {
        this.setState({
            value: value
          });
    }
    han
 
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
        
       
  
  <br></br>
   <Button color="success">Edit</Button>      </form>);
  }

  }
  export default EditTask;