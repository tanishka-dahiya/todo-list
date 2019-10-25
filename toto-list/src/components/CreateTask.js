import React ,{ useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Button } from 'reactstrap';
import './todo.css';


function CreateTask({ addTask }) {

    const [value, setValue] = useState("");
    const [isOpenDropdown, setOpen] = useState(false);
    const [expireyTime,setExpirey]=useState("None") ;
    const action =["None","30 sec","1 min","10 min","30 min"];
    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;

        addTask(value,expireyTime);
        setValue("");
    }
    const toggleFunction=()=>{
        setOpen(!isOpenDropdown);
    }
    const changeValue=e=> {
        setExpirey(e.currentTarget.textContent);
        let id = e.currentTarget.getAttribute("id");
        console.log(id);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                name='title'
                value={value}
                placeholder="Add a new task"
                onChange={e => setValue(e.target.value)}
            />
            
            <br></br>
            <Dropdown isOpen={isOpenDropdown} toggle={toggleFunction}>
        <DropdownToggle caret>
          Expirey Time ({expireyTime})
        </DropdownToggle>
        <DropdownMenu>
                    {action.map(e => {
                        return <DropdownItem id={e} key={e} onClick={changeValue}>{e}</DropdownItem>
                    })}
                </DropdownMenu>
      </Dropdown>
       <br></br>
      <br></br>
       <Button color="success">Add Task</Button>      </form>
    );
}
export default CreateTask;
