/* eslint-disable jest/valid-title */

import { configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import action_Types from '../redux/constants/actionTypes'
import Pokemonreducer from '../redux/reducers/Pokemonreducer'
configure({adapter: new Adapter()});
const INITIAL_STATE = {
    result:[],
    error: null
}
describe(' reducers pokemonReducer', () => {
    
    it("should return ddefault state", ()=>{
       const newstate = Pokemonreducer(INITIAL_STATE,{});
       expect(newstate).toEqual(INITIAL_STATE);
    })

    it("Set Dropdown test",()=>{
        const value = ['wartortle'];
        // eslint-disable-next-line no-unused-vars
        const newstate =Pokemonreducer(INITIAL_STATE,{
            type:action_Types.SET_DROPDOWN_VALUES,
            payload:value
        });
        //console.log(newstate);
        // expect(newstate.result).toBeDefined
    })

    it('Error message', ()=>{
        const newstate =Pokemonreducer(INITIAL_STATE,{
            type:action_Types.error_msg,
            payload:null
        });
        expect(newstate).toEqual({
            ...INITIAL_STATE , 
            error:null
          })
    })
})