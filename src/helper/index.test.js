    import {max_number} from './index';

    describe("max number",()=>{
        describe("given an empty array",()=>{
            it("returns max number 0",()=>{
                expect(max_number([])).toEqual(0)
            })
        })
        describe("given an array of numbers",()=>{
            it("returns max number",()=>{
                expect(max_number([1,2,3])).toEqual(3)
            })
        })
    });