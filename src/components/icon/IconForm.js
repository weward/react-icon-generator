import React, { useContext, useState, useMemo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import { green } from '@material-ui/core/colors';
import { IconContext } from '../../providers/IconState'

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
    },
    processBtn: {
        textAlign: 'center'
    },
    wrapper: {
        margin: theme.spacing(1),
        position: 'relative',
    },
    buttonProgress: {
        color: green[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
      },
}));


function IconForm() {
    const classes = useStyles()

    const {
        processImage,
    } = useContext(IconContext)

    const [image, setImage] = useState('')
    const [fileInputKey, setFileInputKey] = useState(new Date().getTime())
    const [processBtnEnabled, setProcessBtnEnabled] = useState(false)
    const [loading, setLoading] = useState(false)
    
    const preview = useMemo(() => {
        if (image) {
            setProcessBtnEnabled(true)
        }
        const defaultImage = `${window.location.origin + '/logo192.png'}`
        return image ? URL.createObjectURL(image) : defaultImage
    }, [image])

    const process = (e) => {
        e.preventDefault()
        setProcessBtnEnabled(false)
        setLoading(true)

        const formData = new FormData()
        formData.append("image", image)

        processImage(formData).then(() => {
            setImage('')
            setFileInputKey(new Date().getTime())
        }).catch(() => {
            setProcessBtnEnabled(true)
        }).finally(() => {
            setLoading(false)  
        })
    }

    return (
        <Grid container>
            <Grid item xs={6} className={classes.inputContainer}>
                <Input type="file" className={classes.input} key={ fileInputKey } onChange={ (evt) => setImage( evt.target.files[0]) }/>
            </Grid>
            <Grid item xs={6} className={classes.imgContainer}>
                <img src={preview} className={classes.img} alt="Preview" />
            </Grid>
            <Grid item xs={12} className={ classes.processBtn }>
                <div className={classes.wrapper}>
                    <Button variant="contained" color="primary" disabled={ ! processBtnEnabled } onClick={ process }>
                        Process
                    </Button>
                    {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                </div>
            </Grid>
        </Grid>
    )
}

export default IconForm
