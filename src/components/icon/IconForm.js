import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    formContainer: {
        width: '100%'
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    input: {
    //   flexGrow: 1,
        marginLeft: 'auto',
        marginRight: 'auto',
        '&:before': {
            borderBottom: 'none',
            transition: 'none'
        },
        '&:after': {
            borderBottom: 'none',
            transition: 'none'
        },
        '&:hover:not(.Mui-disabled):before': {
            borderBottom: 'none',
            transition: 'none'
        }
    },
    imgContainer: {
        textAlign: 'center',
    },
    img: {
        height: '192px',
        width: '192px'
    }
}));


function IconForm() {
    const classes = useStyles()
    const [image, ] = useState(`${window.location.origin + '/logo192.png'}`)


    return (
        <Grid container>
        <Grid item xs={6} className={classes.inputContainer}>
            <Input type="file" className={classes.input}/>
        </Grid>
        <Grid item xs={6} className={classes.imgContainer}>
            <img src={image} className={classes.img} alt="Preview" />
        </Grid>
        </Grid>
    )
}

export default IconForm
