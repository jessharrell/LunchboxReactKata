import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from "enzyme";
import {getAllText} from "../helpers/getAllText";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
    ReactDOM.unmountComponentAtNode(div);
});

// describe('Recipe List', () => {
//     it('should have a FizzBuzz', () => {
//         let wrapper = shallow(<App />);
//         expect(getAllText(wrapper)).toContain('FizzBuzz');
//     });
// });
