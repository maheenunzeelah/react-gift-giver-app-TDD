import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import toJSON from 'enzyme-to-json';
import Enzyme, { shallow } from 'enzyme';
import Gift from '../components/gifts';

Enzyme.configure({adapter:new Adapter()});
const id=1
const mockFunction=jest.fn();
const props={gift:{id},removeGift:mockFunction}
const gift=shallow(<Gift {...props}/>);
describe("Gifts", ()=>{
 it("renders correctly",()=>{
  expect(toJSON(gift)).toMatchSnapshot()
 })

  it("Initial state of person and present state",()=>{
      expect(gift.state()).toEqual({person:'',present:''})
  })
  describe("When typing into person input",()=>{
      const person='Uncle';
      beforeEach(()=>{
          gift.find('.input-person').simulate('change',{target:{value:person}});
      })
      it("updates the person in state",()=>{
          expect(gift.state().person).toEqual(person)
      })
  });
  describe("When typing into present input",()=>{
    const present='Watch';
    beforeEach(()=>{
        gift.find('.input-present').simulate('change',{target:{value:present}});
    })
    it("updates the present in state",()=>{
        expect(gift.state().present).toEqual(present)
    }) 
  })
  describe("When clicking on `removeGift` button",()=>{
      beforeEach(()=>{
          gift.find('.btn-remove').simulate('click');
      })
      it("button calls a callback function",()=>{
       expect(mockFunction).toHaveBeenCalledWith(id)
      })
  })
});