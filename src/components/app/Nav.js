import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import { Link as RouteLink } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      marginRight: theme.spacing(2),
    },
    link: {
        textDecoration: 'none',
        color: '#ffffff'
    }
}));

function Nav() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <RouteLink to="/" className={classes.link}>
                        <HomeIcon />
                    </RouteLink>
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    <RouteLink to="/" className={classes.link}>
                        Icon Generator
                    </RouteLink>
                </Typography>
                <RouteLink to="/about" className={classes.link}>
                    <Typography variant="h6" className={classes.title}>
                        About
                    </Typography>
                </RouteLink>
                <RouteLink to="/business" className={classes.link}>
                    <Typography variant="h6" className={classes.title}>
                        Business
                    </Typography>
                </RouteLink>
            </Toolbar>
        </AppBar>
        </div>
    )
}

export default Nav