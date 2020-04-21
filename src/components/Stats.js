import React from 'react';
import Td from "./Td";

const Stats = ({users}) => {
    const statsList = users.map(user => (
        <tr key={user.id} >
            <Td to={`/users/${user.id}`}>{user.id}</Td>
            <Td to={`/users/${user.id}`}>{user.first_name}</Td>
            <Td to={`/users/${user.id}`}>{user.last_name}</Td>
            <Td to={`/users/${user.id}`}>{user.email}</Td>
            <Td to={`/users/${user.id}`}>{user.gender}</Td>
            <Td to={`/users/${user.id}`}>{user.ip_address}</Td>
        </tr>
    ))

    return (
        <table className='table table-striped table-bordered table-hover table-sm'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>IP adress</th>
                </tr>
            </thead>
            <tbody>
                {statsList}
            </tbody>
        </table>
    );
};

export default Stats;