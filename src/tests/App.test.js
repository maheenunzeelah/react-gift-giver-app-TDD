import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import App from '../components/app';
import ReactDOM from 'react-dom';
import render from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import toJSON from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

describe("App", () => {
    const app = shallow(<App />);

    it("It renders correctly", () => {
        expect(toJSON(app)).toMatchSnapshot();
    });
    it("Initializes gift `state` to empty array", () => {
        expect(app.state().gifts).toEqual([]);
    });

    describe("when `add gift` button is clicked", () => {

        //Run before each function
        beforeEach(()=>{
            app.find('.btn-add').simulate('click');
        })

        //for cleanup ; reverses the effect of beforeEach()
        afterEach(()=>{
            app.setState({gifts:[]})
        })
        it("adds new gift", () => {
           
            expect(app.state().gifts).toEqual([{ id: 1 }])
        });
     
        it("adds a new gift to rendered list ", () => {
           
            expect(app.find('.gift-list').children().length).toEqual(1);

        })
    })
})
//     it("adds new gift when clicking `add gift`button", () => {
//         app.find('.btn-add').simulate('click');
//         expect(app.state().gifts).toEqual([{ id: 1 }])
//     });

//     //Length of children node will be 2 because click has been simulated two times and rendered gifts array contains two children instead of 1. Previous test also has its effect on this one and this is called Test Pollution
//     it("adds a new gift to rendered list when `add gift button` is clicked", () => {
//         app.find('.btn-add').simulate('click');
//         expect(app.find('.gift-list').children().length).toEqual(2);

//     })
 


