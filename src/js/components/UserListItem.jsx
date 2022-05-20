import React from 'react'
import { Link } from 'react-router'

const UserListItem = ({id, name, picture, onClick}) => (
    <div className="col s12 m4 l3">
        <Link to={`/detail/${id}`} >
            <div className="card hoverable pointer" >
                <div className="card-image">
                    <img src={picture} />
                </div>
                <div className="card-content">
                    <p>{name}</p>
                </div>
            </div>
        </Link>
    </div>
);

export default UserListItem