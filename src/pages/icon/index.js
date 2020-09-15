import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import IconForm from '../../components/icon/IconForm'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      marginTop: '15px'
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
}));

function Icon() {
    const classes = useStyles()

    return (
        <div>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <h3>Generate Icon</h3>
                        <small>Generate icons of different sizes for your needs.</small>
                        <IconForm />
                    </Grid>
                    <Grid item xs={4}>
                        
                        <h3>Notes:</h3>
                        
                        <Typography paragraph>
                            1. Click 'Choose File' to select an image to process.
                        </Typography>
                        <Typography paragraph>
                        2. Accepted file types are .png, .jpeg, .jpg and .gif
                        </Typography>
                        <Typography paragraph>
                            3. Wait for the set of icons to be processed.
                        </Typography>
                        <Typography paragraph>
                            4. Processed icon sizes are 32x32, 57x57, 60x60, 72x72, 76x76, 96x96, 114x114, 120x120, 144x144, 152x152, 180x180 and 192x192
                        </Typography>
                        <Typography paragraph>
                            5. Wait for the icon set to be downloaded automatically.
                        </Typography>
                        <Typography paragraph>
                            6. Enjoy your newly downloaded set of icons.
                        </Typography>
                        <Typography paragraph>
                            7. Bookmark this link for future use. Thank You !!!
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default Icon
