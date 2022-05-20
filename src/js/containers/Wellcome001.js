import React from "react";
import {connect} from "react-redux";
import wellcome2T from '../components/Wellcome2.jsx'
import Wellcome01 from "../components/Wellcome.jsx";
import {handleVisble, handleWellcomeChange} from '../actions'


const mapStateToProps= (state) =>{
    console.log('listContainer State-------',state.usersStore)
    console.log('mapStateToProps_Wellcome_02--------------'+state.wellcomeStore.mInput)
    return {mText2: state.wellcomeStore.mInput,

    }} ;
/*const matDispatchToProps = (dispatch) =>{

}*/
const mapDispatchToProps = (dispatch) => {
    return {
        setChange: (e) => {
            console.log('setChange')
            dispatch(handleWellcomeChange(e))
        },
        setVisable :()=>{

            dispatch(handleVisble())
        }
    }


};


const Wellcome2C =connect(mapStateToProps,mapDispatchToProps)(Wellcome01)
export default Wellcome2C