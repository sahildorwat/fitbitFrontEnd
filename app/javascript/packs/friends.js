import React from 'react'

const friends = ({friends}) =><div className="panel panel-default">
                                <div className="panel-heading"><h4> Friends</h4></div>
                                    <ul className="panel-body list-group">
                                        {friends.map((friend,i) =>
                                                <li key={i} className="list-item" >
                                                <span className="list-item"> {friend.average.steps} </span>
                                                <img src={friend.user.avatar} style={{height:50 , lef: 10, borderRadius:"50%"}}/>
                                                <h4>{friend.user.displayName}</h4>
                                            </li>)
                                        }
                                    </ul>    
                                </div>
export default friends;