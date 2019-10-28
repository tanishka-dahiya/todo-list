import React from 'react';
import Enzyme, { shallow } from 'enzyme';


import Adapter from 'enzyme-adapter-react-16';

import Task from './Task';


Enzyme.configure({ adapter: new Adapter() });
describe('<Task />', () => {
   let wrapper,instance;

const completeTask=jest.fn();
const editTask=jest.fn();
const removeTask=jest.fn();
const expireTask=jest.fn();
const task={title:"eating",expireTime:"None"}
    beforeEach(() => {
         wrapper = shallow(
            <Task task={task} index={2} completeTask={completeTask} editTask={editTask} removeTask={removeTask} expireTask={expireTask}/>);
            instance = wrapper.instance();
    });

    it('should render a <div/>', () => {
       
        expect(wrapper.name()).toBe('div');
    });

    it('removeTask', () => {
        
        wrapper.find('button').at(1).simulate('click',2);
        expect(removeTask).toHaveBeenCalledTimes(1);
      
    });
    it('completeTask', () => {
        
        wrapper.find('button').at(2).simulate('click',2);
        expect(completeTask).toHaveBeenCalledTimes(1);
      
    });
    it('editTask', () => {
        
        wrapper.find('button').at(3).simulate('click',2);
        expect(editTask).toHaveBeenCalledTimes(1);
      
    });
    it('test switch cases', () => {
        
        wrapper.setProps({ task: {title:"eating",expireTime:"30 sec"} });
        instance.componentDidMount()
        expect(wrapper.state('Seconds')).toBe(30);
      
    });
    it('test switch cases', () => {
        
        wrapper.setProps({ task: {title:"eating",expireTime:"1 min"} });
        instance.componentDidMount()
        expect(wrapper.state('minutes')).toBe(1);
      
    });
    it('test switch cases', () => {
        
        wrapper.setProps({ task: {title:"eating",expireTime:"10 min"} });
        instance.componentDidMount()
        expect(wrapper.state('minutes')).toBe(10);
      
    });
    it('test switch cases', () => {
        
        wrapper.setProps({ task: {title:"eating",expireTime:"30 min"} });
        instance.componentDidMount()
        expect(wrapper.state('minutes')).toBe(30);
      
    });
    it('render', () => {
        
        wrapper.setState({ Seconds: 0,minutes:0 });
        instance.render()
        expect(expireTask).toHaveBeenCalled();
      
    });

});
