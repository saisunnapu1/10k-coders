
import ComponentE from './ComponentE'
import React,{useContext} from 'react'
import {UserContext,ChannelContext} from '../App.js';

function ComponentC() {
  // const user=useContext(UserContext)
  // const channel=useContext(ChannelContext)
  return (
    <div>
      <ComponentE/>
      {/* {user}-----{channel} */}

    </div>
  )
}

export default ComponentC
