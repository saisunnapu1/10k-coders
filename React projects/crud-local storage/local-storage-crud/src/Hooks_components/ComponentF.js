import React from 'react'
import {UserContext,ChannelContext} from '../App.js';

function ComponentF() {
  return (
    <div>
      <UserContext.Consumer>
          {
              user=>{
                  return (
                      <ChannelContext>
                          {
                              channel=>{
                                  return(
                                      <div>
                                          User context value {user}, channel context {channel}
                                      </div>
                                  )
                              }
                          }
                      </ChannelContext>
                  )
              }
          }
      </UserContext.Consumer>
    </div>
  )
}

export default ComponentF
