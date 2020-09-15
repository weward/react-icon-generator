import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {bottomAdContent} from './bottomAdContent'

const useStyles = makeStyles((theme) => ({
  gridRoot: {
    marginTop: '30px'
  },
  root: {
    // maxWidth: 345,
    marginLeft: '15px',
    marginRight: '15px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function BottomAd() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState({
      exp1: false,
      exp2: false,
      exp3: false,
  });

  const handleExpandClick = (e) => {
      console.log(e)
    switch (e) {
        case 'exp1': 
            setExpanded({
                ...expanded, 
                exp1: !expanded.exp1
            })
            break;
        case 'exp2': 
            setExpanded({
                ...expanded, 
                exp2: !expanded.exp2
            })
            break;
        case 'exp3': 
            setExpanded({
                ...expanded, 
                exp3: !expanded.exp3
            })
            break;
        default: 
            setExpanded({
                ...expanded, 
                exp1: !expanded.exp1
            })
    }
  };

  return (
        bottomAdContent.map((content) => (
        <Grid item xs={ 4 } className={ classes.gridRoot }>
            <Card className={classes.root}>
                <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                    R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                    <MoreVertIcon />
                    </IconButton>
                }
                title={ content.title }
                subheader={ content.company_name }
                />
                <CardMedia
                className={classes.media}
                image={ content.cover_image_url }
                title={ content.alt }
                />
                <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    { content.excerpt }
                </Typography>
                </CardContent>
                <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded[`exp${content.id}`],
                    })}
                    onClick={() => handleExpandClick(`exp${content.id}`)}
                    aria-expanded={expanded[`exp${content.id}`]}
                    aria-label="show more"
                    >
                    <ExpandMoreIcon />
                </IconButton>
                </CardActions>
                <Collapse in={expanded[`exp${content.id}`]} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>
                    { content.content }
                    </Typography>
                </CardContent>
                </Collapse>
            </Card>
        </Grid>
    ))
  );
}

export default BottomAd