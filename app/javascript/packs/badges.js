import React from 'react'
import Aux from './Aux'

const badges = ({badges}) =><div className="panel panel-default">
                                <div className="panel-heading"><h4>Badges</h4></div>
                                    <div className="panel-body">
                                                {badges.map((badge,i) => <div key={i}>
                                                <h6>{badge.badgeType}</h6>
                                                <p><img src={badge.image75px} /></p>
                                                <p>times achieved : {badge.timesAchieved}</p>
                                                <p>value         : {badge.value} </p>
                                                <p>last on date     : {badge.dateTime} </p>
                                            </div>)}
                                    </div>
                            </div>

export default badges;