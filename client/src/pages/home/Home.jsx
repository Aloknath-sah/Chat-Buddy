import React from 'react'
import { UserSideBar } from './UserSideBar'
import { MessageContainer } from './MessageContainer'


export const Home = () => {
  
  return (
    <div className='flex'>
      <UserSideBar/>
      <MessageContainer/>
    </div>
  )
}
