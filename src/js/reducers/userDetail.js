import C from '../constants'

let user;
user={id:0,
    picture:0,
    age:0,
    eyeColor:0,
    name:0,
    gender:0,
    email:0,
    phone:0,
    address:0,
    registered:0,
    favoriteFruit:0
}
const detailReducer = (state = {}, action) => {
    switch (action.type) {
        case C.SET_USER_DETAIL:
            return   action.data;

        default:
            return state;
    }
};

export default detailReducer
