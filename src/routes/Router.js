import React from 'react'
import routes from './routes'
import Nav from '../components/app/Nav'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import BottomAd from '../components/advertisement/bottom/bottomAd'

const Router = () => {
    return (
        <BrowserRouter>
            <div>
                <Nav />
                <Container maxWidth="lg">
                    <Switch>
                    {routes.map((route, i) => (
                        <Route key={i} path={route.path} component={route.component} exact={route.exact}/>
                        ))}
                    </Switch>
                    <Grid container>
                        <BottomAd />
                    </Grid>
                </Container>
            </div>
        </BrowserRouter>
    )
}

export default Router
