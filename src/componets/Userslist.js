import React from 'react';

const UsersList = ({users}) => {
    return (
        <div>Регистрация прошла успешна
            {users.map((item, index) => {
            return(
                <ul key={index}>
                    <li>{item.id}</li>
                    <li>{item.name}</li>
                    <li>{item.lastname}</li>
                    <li>{item.password}</li>
                </ul>)
            })}
        </div>
    );
}

export default UsersList