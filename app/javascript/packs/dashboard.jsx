import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'
import LifetimeStats from './lifetimeStats'
import dummyData from './dummyData'
import Badges from './badges'
import TimeSeriesBarChart from './timeSeriesBarChart'
import Friends from './friends'

class Dashboard extends Component{
    constructor(props){
        super(props)
        this.state = dummyData;
    }

    fetchFitbitData(url, accessToken, stateKey ){
        axios({
            method: 'get',
            url: url,
            headers: { 'Authorization': 'Bearer '+accessToken},
            mode:   'cors'
        }).then(res => {
            console.log(res.data)
            this.setState( {[stateKey] : res.data}) 
        })
        .catch(res => console.log(res))
    }


    componentDidMount(){
        if(window.location.hash){
            const access_token = window.location.hash.split('&')[0].replace('#access_token=','')
            this.setState({ loggedIn: true}) 

            this.fetchFitbitData('https://api.fitbit.com/1/user/-/profile.json', access_token, 'user' )
            this.fetchFitbitData('https://api.fitbit.com/1/user/-/activities.json', access_token, 'lifetimeStats' )
            this.fetchFitbitData('https://api.fitbit.com/1/user/-/badges.json',access_token, 'badges')
            this.fetchFitbitData('https://api.fitbit.com/1/user/-/activities/steps/date/today/1m.json',access_token, 'steps')
            this.fetchFitbitData('https://api.fitbit.com/1/user/-/activities/distance/date/today/1m.json',access_token, 'distance')
            this.fetchFitbitData('https://api.fitbit.com/1/user/-/friends/leaderboard.json',access_token, 'friends')
        }
    }

    render(){
        return (
            <div className="container">
                <header className="text-center" >
                    <span className="pull-right" > {this.state.user.user.displayName} </span>
                    <h1 className="page-header"> React Fit </h1>
                    <p className = "lead"> Your personal fitness Dashboard </p>
                </header>
                {!this.state.loggedIn && 
                     <div className="text-center">
                         <a href= "https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=22CZYF&redirect_uri=http%3A%2F%localhost%3A3000&scope=activity%20nutrition%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&expires_in=604800" > Login Link </a>
                    </div>
                }

                <div className="row">
                    <div className="col-lg-3">
                        <LifetimeStats  lifetimeStats= {this.state.lifetimeStats} />
                        <Badges badges= {this.state.badges.badges}/>
                    </div>
                    
                    <div className="col-lg-6">
                        <TimeSeriesBarChart data={this.state.steps["activities-steps"]} title="steps" yMax={8000}/>
                        <TimeSeriesBarChart data={this.state.distance["activities-distance"]} title="Distance (Miles)" yMax={6}/>
                    </div>
                    <div className="col-lg-2 col-lg-offset-1">
                        <Friends friends={this.state.friends.friends} />
                    </div>

                </div>
            </div>
        )
    }
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
      <Dashboard />,
      document.body.appendChild(document.createElement('div')),
    )
  })