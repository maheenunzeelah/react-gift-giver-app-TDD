import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import App from '../components/app';
import ReactDOM from 'react-dom';
import render from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import toJSON from 'enzyme-to-json';

Enzyme.configure({adapter: new Adapter()});

const app=shallow(<App />);

it("It renders correctly",()=>{
    expect(toJSON(app)).toMatchSnapshot();
});
it("Initializes gift `state` to empty array",()=>{
    expect(app.state().gifts).toEqual([]);
});
it("adds new gift when clicking `add gift`button",()=>{
    app.find('.btn-add').simulate('click');
});

