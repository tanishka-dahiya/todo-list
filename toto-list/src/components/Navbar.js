import React ,{Component} from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Todo from './todoForm';
import PieChart from '../components/Graph'




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
        <Router>
          <ul>
        <li><Link to="/Create-Todo">Create-Todo</Link></li>
        <li><Link to="/Ongoing-Todo">Ongoing-Todo</Link></li>
        <li><Link to="/Expired-Todo">Expired-Todo</Link></li>
        <li><Link to="/Completed-Todo">Completed-Todo</Link></li>
        <li><Link to="/Pie-Chart">Pie-Chart</Link></li>
      </ul>
      <Route path="/Create-Todo" component={Todo} />
      <Route path="/Pie-Chart" component={PieChart} />
      </Router>);
  }

  }
  export default Navbar;