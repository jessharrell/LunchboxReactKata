import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from "enzyme";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
    ReactDOM.unmountComponentAtNode(div);
});

describe('FizzBuzz', () => {
    it('should have a FizzBuzz button', () => {
        let wrapper = shallow(<App />);
        expect(wrapper.find('button').text()).toEqual('FiBuzz');
    });
});
