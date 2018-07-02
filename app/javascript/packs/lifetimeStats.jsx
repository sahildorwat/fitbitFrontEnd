import React from 'react'

const lifetimeStats = ({lifetimeStats}) =>
                              <div className="panel panel-default">
                              <div className="panel-heading"><h4>LifeTimeStatus</h4></div>
                               <div className="panel-body">
                               <h4> Distance </h4>
                               <p>  total: {lifetimeStats.lifetime.tracker.distance} </p>
                               <p>  tracker: {lifetimeStats.lifetime.total.distance} </p>
                               <h4> Steps </h4>
                               <p>  total: {lifetimeStats.lifetime.tracker.steps} </p>
                               <p>  tracker: {lifetimeStats.lifetime.total.steps} </p>
                             </div>
                           </div>
export default lifetimeStats;