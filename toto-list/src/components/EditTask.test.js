import React from 'react';
import Enzyme, { shallow } from 'enzyme';


import Adapter from 'enzyme-adapter-react-16';

import EditTask from './EditTask';


Enzyme.configure({ adapter: new Adapter() });
describe('<EditTask />', () => {
   let wrapper;

const data={title:"eating",expireTime:"None"}
const handleEdit=jest.fn();

    beforeEach(() => {
         wrapper = shallow(
            <EditTask  data={data} index={2}  handleEdit={handleEdit} />);
            
          
    });

    it('should render a <form/>', () => {
       
        expect(wrapper.name()).toBe('form');
    });

    it('simulate onchange on input field', () => {
            
        wrapper.find('input').simulate('change',{target: {name: "pollName", value: "spam"}});
        expect(wrapper.state('value')).toBe('spam');
      
    });
    it('handleSubmit', () => {
        
        wrapper.find('form').simulate('submit',{preventDefault:jest.fn(),target: {name: "pollName", value: "spam"}});
        expect(handleEdit).toHaveBeenCalledTimes(1);
      
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
