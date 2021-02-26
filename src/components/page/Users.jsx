import React, { useEffect, useState} from 'react'
import { Table, Container } from 'react-bootstrap'



const Users = () => {

    const [users, setUsers] = useState(null)

    useEffect( ( )=> {
        fetch( 'https://jsonplaceholder.typicode.com/users' )
        .then( result => result.json() )
        .then( result => setUsers( result ) )
    }, [])


    return (
        <Container>
        <Table>
        <thead>
            <tr>
                <th> # </th>
                <th> Name </th>
                <th> Username </th>
                <th> Email </th>
            </tr>
        </thead>
        { users && users.map( user => {
            return <tbody key={ user.id }>
            <tr>
                <td> { user.id } </td>
                <td> { user.name } </td>
                <td> { user.username } </td>
                <td> { user.email } </td>
            </tr>
            </tbody>
        } ) }
        </Table>
        </Container>
    )
}

export default Users
