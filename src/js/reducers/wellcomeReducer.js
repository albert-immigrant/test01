import C from '../constants'

const initState = {
    mInput: 88951,
    isvisable :false,
};

const wellcomeReducer = (state = initState, action) => {

    switch (action.type){
        case C.HANDLE_WELLCOME_CHANGE :
           // return setText(state,action);
            return setText(state,action )

        case C.HANDLE_VISBLE :
            return toggleVisble(state)
        default:
           console.log('wellcomeReducer ---- default') ;
           return state;
    }
};

export default wellcomeReducer
function setText(state,action){
    var ss=action.e.target.value;
    action.e.target.value="";
    return {mInput: ss   }
}

function toggleVisble(state){

    return {mInput:state.mInput,isvisable: !state.isvisable}
}