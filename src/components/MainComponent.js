import React, {Component} from "react";
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './HomeComponent'
import Users from "./Users";
import DetailedUser from "./DetailedUser";
import users from "../jsons/users";

class MainComponent extends Component{
    constructor(props){
        super(props)

        this.state = {
            users : users
        }
    }

    render() {
        const UserWithId = ({match}) => {
            return(
                <DetailedUser
                    selectedUser={this.state.users.filter((user) => user.id === parseInt(match.params.statId,10))[0]}
                />
            );
        }

        return (
            <Switch>
                <Route exact path='/home' component={() => <Home/>}/>
                <Route exact path='/users' component={() => <Users users={this.state.users}/>}/>
                <Route path='/users/:statId' component={UserWithId}/>
                <Redirect to='/home'/>
            </Switch>
        )
    }
}

export default MainComponent