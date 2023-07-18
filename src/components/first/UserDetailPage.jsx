import React from 'react'
import { useParams } from 'react-router-dom'

function UserDetailPage() {
  const params=useParams();
  const {id}=params;
  console.log(id);
  return (
    <div>
        <h1>User Detail Page Here {id}</h1>
    </div>
  )
}

export default UserDetailPage