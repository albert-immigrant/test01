import React, {useEffect,useState} from 'react'
import  Wellcome2 from './Wellcome2.jsx'
import  Wellcome from './Wellcome.jsx'
import Title from "./Title.jsx";
import {text} from "body-parser";
import WellcomeC from '../containers/Wellcome001'
import ComponentThree from './ComponentThree.jsx'



function Header ({title}) {


    return (<nav>
            <div className="nav-wrapper container">
                <a className="brand-logo">{title}</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <a href="https://github.com/Dununan/redux-express-example" target="blank">
                            Fork me on GitHub
                        </a>
                    </li>
                    <li>
                        <div className=" card-content left-align">
                            <Title text={'yyyy Test'}/>
                        {/*    <Wellcome2 mText={'Wellcome2 8888'}/>*/}
                         {/*   <Wellcome myText={'errt This is MYTEXT'} valueTT={'valueTT'}/>*/}
                     <WellcomeC/>
                            <ComponentThree/>
                        </div>
                    </li>
                </ul>
            </div>

        </nav>
    )
};

/*Header.propTypes = {
    title: React.PropTypes.string.isRequired,
}*/

export default Header