import React, { useEffect, useState }  from 'react'
import Wellcome2 from "./Wellcome2.jsx";
import Wellcome2C from "../containers/Wellcome2.js";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";



class Wellcome extends React.Component {



     constructor(props) {

       // this.mText=props.mText;
  /*      let state = {
            name: 'Hello World',
            age: '30'
        };
*/
        super(props);

        // this.props={valueTT:''};
       //  this.state= {valueTT:''};
     //    this.state.valueTT=this.props.valueTT;
     //    this.setChange=  this.setChange.bind(this);
      //  this.state.text1='-------------';
         const   myText='';
     //    props.myText=state.wellcomeStore.mInput
    }

 /*setChange(e){

  //  this.setState({valueTT:e.target.value});
     e.target.value="";
     console.log('setChange-----'+value)
 };*/

    render() {
//var myText=this.props.myText;
   //     var        valueTT=   this.props.valueTT;
        return(
            <div>
                <h1>{ 'wellcome01----'+this.props.mText2}</h1>
          {/*      <h1>{this.state.valueTT}</h1>*/}
         {/*       <textarea value={'Wellcome_01_TextArea-----------'+this.state.valueTT} disabled={true}/> */}
                <textarea value={'Wellcome_01_TextArea-----------'+this.props.mText2} disabled={true}/>
                <h2>Heading  Wellcome  001</h2>
                <h3>Sub Heading</h3>
                {/*<button onClick= {(e)=> this.props.setChange(e)}>click Wellcome 001</button>*/}
                <button onClick= {(e)=> this.props.setVisable()}>click Wellcome 001</button>
             {/*   <h1>{myText}</h1>*/}
                {/*<Wellcome2  text={'111'} onMyChange={ this.setChange}/>*/}
                <Wellcome2C/>

            </div>

     )

    }
}
/*function mapStateToProps(state){
    return{
        val: state.val
    };
}*/
/*const mapStateToProps = (state)  =>{
    return {myText :state.wellcomeStore.mInput}
}*/
//Wellcome.propotype={text1: React.PropTypes.string.isRequired,}
export default Wellcome