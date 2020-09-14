import React from 'react'
import routes from './routes'
import Nav from '../components/app/Nav'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Router = () => {
    return (
        <BrowserRouter>
            <div>
                <Nav />
                <Switch>
                {routes.map((route, i) => (
                    <Route key={i} path={route.path} component={route.component} exact={route.exact}/>
                ))}
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default Router
