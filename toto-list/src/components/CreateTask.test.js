import React from 'react';
import Enzyme, { shallow } from 'enzyme';


import Adapter from 'enzyme-adapter-react-16';

import CreateTask from './CreateTask';


Enzyme.configure({ adapter: new Adapter() });

describe('<CreateTask />', () => {
   let wrapper;

const addTask=jest.fn()
    beforeEach(() => {
         wrapper = shallow(
            <CreateTask addTask={addTask} />);
          
    });

    it('should render a <form/>', () => {
       
        expect(wrapper.name()).toBe('form');
    });

    it('simulate onchange on input field', () => {
            
        wrapper.find('input').simulate('change',{target: {name: "pollName", value: "spam"}});
        expect(wrapper.find('input').props().value).toBe('spam');
      
    });
    it('handleSubmit', () => {
        
        wrapper.find('form').simulate('submit',{preventDefault:jest.fn(),target: {name: "pollName", value: "spam"}});
        expect(wrapper.find('input').props().value).toBe('');
      
    });
    it('toggleFunction', () => {
        
        wrapper.find('Dropdown').props().toggle();
        expect(wrapper.find('Dropdown').props().isOpen).toBe(true);
      
    });
    it('changeValue', () => {
        
        wrapper.find('DropdownItem').first().simulate('click',{currentTarget: {textContent: "None"}});
        expect(wrapper.find('DropdownToggle').childAt(1).text()).toBe("None");
      
    });

});
