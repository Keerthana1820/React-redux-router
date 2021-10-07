import {mapStateToProps} from "../containers/Container";
// import {mapsDispatchToProps} from "../components/Multidrop"
// import {connect} from 'react-redux';
// import Poki from '../components/Poki';
// import fetchAbilities from '../redux/actions/action';
describe("App Container",() => {
    it("map state to props", () => {
        const INITIAL_STATE = {
            event : { 
            selectValue: '1',
            error : null,          
          }};       
        expect(mapStateToProps(INITIAL_STATE).getSelectedValue).toEqual('1');
    });
})