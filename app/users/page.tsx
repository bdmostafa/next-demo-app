import React from 'react'

interface User {
    id: number;
    name: string;
    email: string;
}
const UsersPage = async () => {
    const res: any = await fetch('https://jsonplaceholder.typicode.com/users', 
    {
        cache: 'no-store',
        // next: { revalidate: 10 } // fetch from server every 10 seconds
    })
    const users: User[] = await res.json();

  return (
    <div className='className="overflow-x-auto">'>
        <h2 className='p-5'>UsersPage</h2>
        {/* <p>{new Date().toLocaleTimeString()}</p> */}

        <table className='table table-xs table-pin-rows table-pin-cols'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
            {users.map((user: User) =>  
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>

            </tr>)}
                
            </tbody>
        </table>
    </div>
  )
}

export default UsersPage