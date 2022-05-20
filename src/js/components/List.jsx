import React from 'react'
import UserListItem from './UserListItem.jsx'

const List = ({usersList, onClickMe}) => (
    <div className="row">
        {usersList.users.map(user =>
            <UserListItem
                key={user.id}
                {...user}
                onClick={() => onClickMe(user)}
            />
        )}
    </div>
);

/*List.propTypes = {
    usersList: React.PropTypes.object.isRequired,
    onClickMe: React.PropTypes.func.isRequired,
};*/

export default List