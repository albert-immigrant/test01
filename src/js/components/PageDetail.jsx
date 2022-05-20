import React from 'react'
import { browserHistory } from 'react-router'
import Title from "./Title.jsx";
import Wellcome2 from "./Wellcome2.jsx";






class PageDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.init(this.props.params.id);
    }

    genFun () {
        let userA = this.props.user;
        let uAa = Array.from(userA);
        /*uAa.forEach( (v,k)=>{
               console.log(v.key+'---'+k.value);
               return <div>{k}----{v}</div>}  ) */
        let ss='';
       // console.log(userA[prop])
        let prop;
        //for( prop in userA){
        Object.keys(userA).forEach( (key)=>{console.log(userA[key]);return<div className="collection-item"> {key.toString()}  +{userA[key]}+</div>} )
         return ss;
    }


    render() {
        let user = this.props.user;

        if (!user.id) {
            return <div>Loading...</div>;
        }
        //----------------------

        let userA = this.props.user;
        let list=[];
        Object.keys(userA).map(
            (k,v)=>{
                console.log(k+'---'+v);
        list.push(<div className="collection-item"> {k.toString()}  +{userA[k]}+</div>);}
        )


        return (

            <div className="container" >
                <div className="left-align margin-top" >
                    <a onClick={browserHistory.goBack} className="waves-effect waves-light btn grey darken-1"  >
                        <i className="material-icons left">arrow_back</i> Back
                    </a>

                </div>
                <div className="row" >
                    <div className="col s12">
                        <div className="card horizontal">
                            <div className="card-image">
                                <img src={user.picture} />
                            </div>
                            <div className="card-stacked">
                                <div className="card-content left-align">
                                    <h4 style={{ marginTop: '0px'}}>{user.name}</h4>
                                    <div className="col s12" >
                                        <ul className="collection">
                                            <li className="collection-item">Age: {user.age}</li>
                                            <li className="collection-item">Eye Color: {user.eyeColor}</li>
                                            <li className="collection-item">Gender: {user.gender}</li>
                                            <li className="collection-item">Favorite Fruit: {user.favoriteFruit}</li>
                                            {this.genFun()}
                                            {list}
                                            <Title text={'yyyy Test'}/>
                                            <Wellcome2 text={'Text in Detail'}/>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

/*PageDetail.propTypes = {
    user: React.PropTypes.object.isRequired,
    userId: React.PropTypes.string.isRequired,
};*/

export default PageDetail