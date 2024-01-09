import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {user}= useParams()
    return (
        <div className='bg-gray-400 p-4 text-3xl'>User:{user}</div>
    )
}

export default User
