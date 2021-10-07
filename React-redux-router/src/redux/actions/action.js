import axios from "axios";
import action_Types from  '../constants/actionTypes';

const fetchAbilities = (name) => async (dispatch) => {    
    await axios 
        .get('https://pokeapi.co/api/v2/pokemon/' + name )
        .then((res) => {
            //console.log("success", res);       
            dispatch(getData(res.data));
        }) 
        .catch((error) => {
            dispatch(getError(error));
            //console.log(Error,error.data);
          });
};
const getData = (result) => {
    return {
        type: action_Types.SET_DROPDOWN_VALUES,
        payload: result.abilities,
    };
};
const getError = (error) => {
    return {
      type: action_Types.error_msg,
      payload: true,
    };
  };
export default fetchAbilities;