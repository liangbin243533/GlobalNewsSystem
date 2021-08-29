import React from 'react'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
import Login from '../views/login/Login'
import NewsSandBox from '../views/sanbox/NewsSandBox';

export default function IndexRouter() {
    return (
        <HashRouter>
            <Switch>
                <Route path="/login" component={Login}></Route>
            {/* <Route path="/" component={NewsSandBox}></Route> */}
            <Route path="/" render={ () =>
                localStorage.getItem("token")?
                <NewsSandBox></NewsSandBox>:
                <Redirect to="/login"/>
            }
            />
            </Switch>          
        </HashRouter>
    )
}
