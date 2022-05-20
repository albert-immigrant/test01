import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux'
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";


function Wellcome2({mText2,isvisable,onMyChange,setChange})  {
    const [wState,setWState]=useState('')
    // const thisClick =onMyChange
     useEffect(()=>{
     console.log('useeffect')
     console.log('mText2-------'+mText2)
     }

     )
const hSyyle={'background-color':'rgb(123 157 233 / 73%)',
    width: 'fit-content',
    'margin-left': '25%'}
    return (
        <div>
            <h2 style={{color:'red'}}>Heading  Wellcome  002</h2>
            <h1 style={isvisable?{display:'block'}:{display:'none'}}>Wellcome 002</h1>
            <h1 style={hSyyle}>{'mText2---'+mText2}</h1>
            <div onClick={()=>onMyChange('tuvoovv sss')}>clickme</div>
           {/* <input type='text' placeholder={'534 99999'} onBlur={(e)=>onMyChange(e)}/>*/}
            <input type='text' placeholder={'534 99999'} onBlur=
                {(e)=> setChange(e)}/>
        </div>

    )
};


//Wellcome2.propotype={text1: React.PropTypes.string.isRequired,}
//mapStateToProps()

export default Wellcome2